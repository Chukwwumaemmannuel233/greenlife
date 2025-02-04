"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 24.99,
    image: "/image/image2.jpg",
    category: "Kitchen",
  },
  {
    id: 2,
    name: "Bamboo Cutlery Set",
    price: 19.99,
    image: "/image/image3.jpg",
    category: "Kitchen",
  },
  {
    id: 3,
    name: "Reusable Produce Bags",
    price: 14.99,
    image: "/image/image4.jpg",
    category: "Kitchen",
  },
  {
    id: 4,
    name: "Solar-Powered Charger",
    price: 39.99,
    image: "/image/image5.jpg",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Biodegradable Phone Case",
    price: 29.99,
    image: "/image/image6.jpg",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Recycled Plastic Backpack",
    price: 59.99,
    image: "/image/image7.jpg",
    category: "Fashion",
  },
  {
    id: 7,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "/image/image8.jpg",
    category: "Fashion",
  },
  {
    id: 8,
    name: "Beeswax Food Wraps",
    price: 18.99,
    image: "/image/image9.jpg",
    category: "Kitchen",
  },
  {
    id: 9,
    name: "Bamboo Toothbrush",
    price: 5.99,
    image: "/image/image11.jpg",
    category: "Personal Care",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const router = useRouter()

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory),
  )

  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold">Our Products</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto p-2 border rounded-md"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No products found. Try a different search term or category.</p>
      )}
    </div>
  )
}

