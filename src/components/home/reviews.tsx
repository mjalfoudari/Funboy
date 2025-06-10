'use client'

import React from 'react'

const reviews = [
  {
    text: "I have ordered numerous floats from FUNBOYKW and they are THE BEST! Easy to fill up with a pump, easy to deflate, AWESOME design, fun to use.",
    author: "Jessica L."
  },
  {
    text: "Amazing! These are by far the most comfortable loungers I have ever purchased! My family and I absolutely love them.",
    author: "Kirsten"
  },
  {
    text: "Great for a bachelorette party! So cute and so colorful!",
    author: "xo, Bach to Basic"
  },
  {
    text: "This lounger is the most comfortable lounger I have ever had. It's completely supportive for reading a book, sipping a cocktail or for taking a nap. Obsessed!",
    author: "Penny W."
  }
]

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real reviews from happy customers across Kuwait and the Middle East</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="mb-4">
                <div className="flex text-funboy-yellow mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "{review.text}"
                </blockquote>
              </div>
              <div className="font-semibold text-gray-900">
                {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 