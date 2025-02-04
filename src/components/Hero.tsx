import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Sustainable Living Made Easy</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Discover our range of eco-friendly products that help you reduce your carbon footprint without compromising on
          quality.
        </p>
        <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
          Shop Now
        </Button>
      </div>
    </section>
  )
}

