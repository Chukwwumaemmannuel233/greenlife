"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage("Thank you for your message! We will get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, or just
            want to say hello, don't hesitate to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-4 text-green-600" />
              <span>support@greenlife.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-green-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4 text-green-600" />
              <span>123 Eco Street, Green City, 12345</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} inputSize="large" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} inputSize="large" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {submitMessage && (
            <p className={`mt-4 ${submitMessage.includes("error") ? "text-red-500" : "text-green-500"}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

