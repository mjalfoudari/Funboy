import Hero from '@/components/home/hero'
import FeaturedProducts from '@/components/home/featured-products'
import Categories from '@/components/home/categories'
import Reviews from '@/components/home/reviews'
import Newsletter from '@/components/home/newsletter'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
} 