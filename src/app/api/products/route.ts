import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
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
    const formattedProducts = products.map(product => ({
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