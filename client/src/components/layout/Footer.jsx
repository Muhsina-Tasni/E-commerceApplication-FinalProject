// src/components/Footer.jsx
import { Facebook, Twitter, Instagram, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag className="h-6 w-6 text-white" />
            <span className="text-xl font-semibold text-white">MyShop</span>
          </div>
          <p className="text-sm">
            Your one-stop destination for the best products at unbeatable prices.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" className="hover:text-white">All Products</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/deals" className="hover:text-white">Deals</a></li>
            <li><a href="/new" className="hover:text-white">New Arrivals</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
