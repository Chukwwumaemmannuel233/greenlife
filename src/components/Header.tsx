"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdownMenu"
import { User, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">
          GreenLife
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/products" className="text-gray-600 hover:text-green-600">
            Products
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-green-600">
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/products" className="text-gray-600 hover:text-green-600">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-green-600">
              Login
            </Link>
            <Link href="/signup" className="text-gray-600 hover:text-green-600">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

