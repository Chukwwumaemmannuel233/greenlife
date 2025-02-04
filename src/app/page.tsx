import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ProductShowcase from "@/components/ProductShowcase"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Discover More</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/about" passHref>
                <Button variant="outline" size="lg">
                  About Us
                </Button>
              </Link>
              <Link href="/products" passHref>
                <Button variant="outline" size="lg">
                  All Products
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

