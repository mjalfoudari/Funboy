'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">FUNBOY</span>
                <span className="text-funboy-yellow">KW</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium pool floats and inflatables delivered to Kuwait and across the Middle East. 
              Bringing fun and relaxation to your summer days.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.138 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.968-1.294-2.021-1.294-3.338h-3.423v14.267c0 1.784-1.456 3.24-3.24 3.24s-3.24-1.456-3.24-3.24 1.456-3.24 3.24-3.24c.348 0 .682.055 1.004.154V8.772c-.322-.042-.652-.063-.988-.063-3.763 0-6.813 3.05-6.813 6.813s3.05 6.813 6.813 6.813 6.813-3.05 6.813-6.813V9.379a9.622 9.622 0 005.66 1.812V7.767a5.632 5.632 0 01-2.952-2.205z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping to Kuwait & GCC</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About FunboyKW</Link></li>
              <li><Link href="/wholesale" className="hover:text-white transition-colors">Wholesale Inquiries</Link></li>
              <li><Link href="/corporate" className="hover:text-white transition-colors">Corporate Gifting</Link></li>
              <li><Link href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white">Kuwait Office</p>
                <p>support@funboykw.com</p>
                <p>+965 XXXX XXXX</p>
              </div>
              <div>
                <p className="font-medium text-white">Hours</p>
                <p>Sunday - Thursday: 9AM - 6PM KWT</p>
                <p>Friday - Saturday: 10AM - 4PM KWT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FunboyKW. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>🔒 Secure Payments</span>
              <span>🚚 Fast GCC Shipping</span>
              <span>💬 24/7 Kuwait Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 