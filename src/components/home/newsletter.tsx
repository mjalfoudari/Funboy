'use client'

import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 bg-gradient-to-r from-funboy-pink to-funboy-blue">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sign Up & Get 10% Off
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and special events in Kuwait and the Middle East
          </p>

          {isSubmitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-white text-lg font-semibold">
                Thanks for subscribing! Check your email for your discount code.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-funboy-pink px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}

          <p className="text-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
} 