"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    console.log("Newsletter signup with:", email)
    setEmail("")
    alert("Thank you for signing up!")
  }

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Green, Stay Informed</h2>
        <p className="mb-8">Sign up for our newsletter to receive eco-tips and exclusive offers.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-800"
          />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

