'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProductImage {
  id: string
  url: string
  altText: string | null
  sortOrder: number
}

interface Category {
  id: string
  name: string
  slug: string
}

interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  price: any // Using any to handle decimal to number conversion
  comparePrice: any | null // Using any to handle decimal to number conversion
  inventory: number
  images: ProductImage[]
  category: Category
}

// Constants for price conversion
const KWD_MARKUP = 105.55; // Fixed markup in KWD
const USD_TO_KWD = 0.31; // Conversion rate (1 USD = 0.31 KWD approximately)

// Function to convert price from USD to KWD with markup
const convertToKWD = (usdPrice: number): number => {
  return Number(usdPrice) * USD_TO_KWD + KWD_MARKUP;
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await fetch('/api/products?featured=true&limit=8')
        if (response.ok) {
          const data = await response.json()
          console.log("Featured products data:", data)
          setProducts(data)
        } else {
          console.error('Failed to fetch products')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Hot List</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading our most popular floats...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="aspect-product bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Hot List</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No featured products found. Check back soon!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Hot List</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular floats loved by customers across Kuwait and the Middle East.
            <span className="font-semibold text-funboy-blue"> Free shipping included!</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/products/${product.slug}`}>
                <div className="card hover:shadow-lg transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="relative aspect-product overflow-hidden bg-gray-100">
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0].url}
                        alt={product.images[0].altText || product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                    {product.comparePrice && Number(product.comparePrice) > Number(product.price) && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        SALE
                      </div>
                    )}
                    {product.inventory === 0 && (
                      <div className="absolute top-3 right-3 bg-gray-800 text-white px-2 py-1 rounded text-sm font-semibold">
                        SOLD OUT
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FREE SHIPPING
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-funboy-blue transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{product.category?.name || 'Uncategorized'}</p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      {product.comparePrice && Number(product.comparePrice) > Number(product.price) ? (
                        <>
                          <span className="text-lg font-bold text-red-600">
                            KWD {convertToKWD(Number(product.price)).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            KWD {convertToKWD(Number(product.comparePrice)).toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          KWD {convertToKWD(Number(product.price)).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="btn-primary inline-block"
          >
            Shop All Products
          </Link>
          <p className="text-sm text-gray-600 mt-4">All prices include free shipping to Kuwait and GCC countries</p>
        </div>
      </div>
    </section>
  )
} 