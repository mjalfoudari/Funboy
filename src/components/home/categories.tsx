'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  _count?: {
    products: number
  }
}

// Default category images mapped to category names
const categoryImages: { [key: string]: string } = {
  'Pool Floats': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Fabric Floats': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Kids': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Leisure Islands': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Paddle Boards': 'https://images.unsplash.com/photo-1581839180803-8b79d1bb90e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Movie Screen': 'https://images.unsplash.com/photo-1489599905866-7d2b2d8d4dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Tanning Pools': 'https://images.unsplash.com/photo-1571731956672-7d1ba5d0f4f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'Accessories': 'https://images.unsplash.com/photo-1574663246770-b52d3c8b5b3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}

// Fallback categories in case the API doesn't return any
const fallbackCategories: Category[] = [
  {
    id: '1',
    name: 'Pool Floats',
    slug: 'pool-floats',
    description: 'Luxury pool floats for ultimate relaxation',
    image: null,
    _count: { products: 5 }
  },
  {
    id: '2',
    name: 'Fabric Floats',
    slug: 'fabric-floats',
    description: 'Premium fabric-covered pool floats',
    image: null,
    _count: { products: 7 }
  },
  {
    id: '3',
    name: 'Kids',
    slug: 'kids',
    description: 'Fun pool floats for kids',
    image: null,
    _count: { products: 4 }
  },
  {
    id: '4',
    name: 'Leisure Islands',
    slug: 'leisure-islands',
    description: 'Large floating islands for groups',
    image: null,
    _count: { products: 1 }
  }
]

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories')
        if (response.ok) {
          const data = await response.json()
          console.log("Categories data:", data)
          
          // Filter to show only categories with products and limit to featured ones
          const featuredCategories = data.filter((cat: Category) => 
            cat._count && cat._count.products > 0 && 
            ['Pool Floats', 'Fabric Floats', 'Kids', 'Leisure Islands'].includes(cat.name)
          ).slice(0, 4)
          
          if (featuredCategories.length > 0) {
            setCategories(featuredCategories)
          } else {
            // Use fallback categories if no categories with products are found
            setCategories(fallbackCategories)
          }
        } else {
          console.error('Failed to fetch categories')
          setCategories(fallbackCategories)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
        setCategories(fallbackCategories)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading categories...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200">
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-8 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of luxury pool floats and accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gradient-to-br from-funboy-yellow to-funboy-pink">
                <Image
                  src={category.image || categoryImages[category.name] || categoryImages['Pool Floats']}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    {category.description || (category._count ? `${category._count.products} products` : 'Explore collection')}
                  </p>
                  <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold inline-block w-fit text-sm">
                    Shop Now
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 