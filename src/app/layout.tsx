import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'FunboyKW - Premium Pool Floats & Inflatables for Kuwait & Middle East',
  description: 'Discover luxury pool floats, inflatables, and water accessories. Premium quality products delivered to Kuwait and across the Middle East.',
  keywords: 'pool floats, inflatables, Kuwait, Middle East, luxury, water accessories, pool, summer',
  authors: [{ name: 'FunboyKW' }],
  robots: 'index, follow',
  openGraph: {
    title: 'FunboyKW - Premium Pool Floats & Inflatables',
    description: 'Luxury pool floats and inflatables for Kuwait & Middle East',
    type: 'website',
    locale: 'en_US',
    siteName: 'FunboyKW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunboyKW - Premium Pool Floats & Inflatables',
    description: 'Luxury pool floats and inflatables for Kuwait & Middle East',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
} 