import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">GreenLife</h3>
            <p className="text-green-200">Empowering sustainable living through eco-friendly products.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-green-200 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; 2025 GreenLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

