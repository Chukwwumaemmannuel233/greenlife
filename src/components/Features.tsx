import { Leaf, Recycle, Droplet } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Biodegradable",
    description: "Our products are made from natural materials that decompose without harming the environment.",
  },
  {
    icon: Recycle,
    title: "Recyclable Packaging",
    description: "We use minimal, recyclable packaging to reduce waste and promote a circular economy.",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    description: "Our manufacturing process is designed to minimize water usage and protect this precious resource.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose GreenLife?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

