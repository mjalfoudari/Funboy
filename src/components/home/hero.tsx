'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-funboy-yellow via-funboy-pink to-funboy-blue min-h-[80vh] flex items-center">
             {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gPGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPiA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+IDwvZz4gPC9nPiA8L3N2Zz4=')]"></div>
       </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Inflatable Fun
              <br />
              <span className="text-funboy-cream">For Every Season</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              For festive, laid back occasions everywhere. Choose the FunboyKW of your dreams.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/categories/fabric-floats"
                className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                Shop Fabric Sunbeds
              </Link>
              <Link
                href="/products"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200 text-center"
              >
                Shop All Floats
              </Link>
            </div>

            {/* Free Shipping Banner */}
            <div className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg inline-block">
              <span className="font-bold">FREE SHIPPING</span> on all orders to Kuwait & GCC countries
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Fun</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500K+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Kuwait Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto animate-float">
              <Image
                src="https://cdn.shopify.com/s/files/1/0280/3837/5763/files/FBU324-P_Cabana_Sunbed_4_1500x.jpg"
                alt="Premium Pool Float - Funboy Cabana Sunbed"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-funboy-yellow text-black px-4 py-2 rounded-full font-bold shadow-lg">
                Free Shipping!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg">
                GCC Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 