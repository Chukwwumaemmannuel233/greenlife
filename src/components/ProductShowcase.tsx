import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Eco-Friendly Water Bottle", price: "$24.99", image: "/image/image14.jpg" },
  { name: "Bamboo Cutlery Set", price: "$19.99", image: "/image/image15.jpg" },
  { name: "Reusable Produce Bags", price: "$14.99", image: "/image/image17.jpg" },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <Button className="w-full">Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

