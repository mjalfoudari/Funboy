import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic';

// Define Product and related types
interface ProductImage {
  id: string;
  url: string;
  altText: string | null;
  sortOrder: number;
}

interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number | string;
  inventory: number;
  isActive: boolean;
  color?: string | null;
  size?: string | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number | string;
  comparePrice: number | string | null;
  images: ProductImage[];
  category: Category | null;
  variants: ProductVariant[];
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any; // For other product properties
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const featured = searchParams.get('featured')
    const category = searchParams.get('category')
    const limit = searchParams.get('limit')

    console.log(`API products request - featured: ${featured}, category: ${category}, limit: ${limit}`)

    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        ...(featured === 'true' && { isFeatured: true }),
        ...(category && { category: { slug: category } }),
      },
      include: {
        category: true,
        images: {
          orderBy: { sortOrder: 'asc' },
        },
        variants: {
          where: { isActive: true },
          orderBy: { id: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
      ...(limit && { take: parseInt(limit) }),
    })

    // Format the products to ensure consistent data structure
    const formattedProducts = products.map((product) => ({
      ...product,
      price: Number(product.price),
      comparePrice: product.comparePrice ? Number(product.comparePrice) : null,
      images: product.images || [],
      category: product.category || { id: '', name: 'Uncategorized', slug: 'uncategorized' }
    }))

    console.log(`API products response: ${formattedProducts.length} products found`)
    return NextResponse.json(formattedProducts)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
} 