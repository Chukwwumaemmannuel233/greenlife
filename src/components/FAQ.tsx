"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Are all your products really eco-friendly?",
    answer:
      "Yes, all our products are made from sustainable materials and are designed to be biodegradable or easily recyclable.",
  },
  {
    question: "Do you ship internationally?",
    answer: "We currently ship to select countries. Please check our shipping page for more details.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging.",
  },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-green-100 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

