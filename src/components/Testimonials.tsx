import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Environmental Activist",
    image: "/image/image13.jpg",
    quote:
      "GreenLife products have transformed the way I approach sustainability in my daily life. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Eco-conscious Consumer",
    image: "/image/image12.jpg",
    quote: "I love how GreenLife makes it easy to make environmentally friendly choices without sacrificing quality.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

