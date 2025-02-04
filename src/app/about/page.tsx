import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About GreenLife</h1>
          <p className="text-lg mb-6">
            At GreenLife, we're passionate about making sustainable living accessible to everyone. Our journey began in
            2020 with a simple idea: to create eco-friendly products that don't compromise on quality or style.
          </p>
          <p className="text-lg mb-6">
            We believe that small changes can make a big impact. That's why we're committed to sourcing materials
            responsibly, minimizing waste in our production process, and giving back to environmental causes.
          </p>
          <p className="text-lg mb-6">
            Join us in our mission to create a greener, more sustainable future. Every product you choose from GreenLife
            is a step towards reducing your environmental footprint and inspiring others to do the same.
          </p>
          <Link href="/products" passHref>
            <Button>Explore Our Products</Button>
          </Link>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/image/image1.jpg" alt="GreenLife Team" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainability",
              description: "We prioritize eco-friendly materials and processes in everything we do.",
            },
            {
              title: "Innovation",
              description: "We're constantly seeking new ways to make sustainable living easier and more enjoyable.",
            },
            {
              title: "Transparency",
              description: "We believe in being open about our practices and the impact of our products.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

