import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug')

    console.log(`API categories request - slug: ${slug || 'all'}`)

    const categories = await prisma.category.findMany({
      where: slug ? { slug: slug } : {},
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { products: true },
        },
      },
    })

    // Add product counts and make sure all categories have the expected format
    const formattedCategories = categories.map(category => ({
      ...category,
      _count: category._count || { products: 0 }
    }))

    console.log(`API categories response: ${formattedCategories.length} categories found ${slug ? `for slug '${slug}'` : ''}`)
    return NextResponse.json(formattedCategories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
} 