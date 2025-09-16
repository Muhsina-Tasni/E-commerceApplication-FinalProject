// src/components/Navbar.jsx
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-900">MyShop</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-gray-900">Home</a>
          <a href="/products" className="hover:text-gray-900">Products</a>
          <a href="/categories" className="hover:text-gray-900">Categories</a>
          <a href="/deals" className="hover:text-gray-900">Deals</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <a href="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              3
            </span>
          </a>
          <a href="/account">
            <User className="h-6 w-6 text-gray-700 hover:text-gray-900" />
          </a>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <a href="/" className="block text-gray-700 hover:text-gray-900">Home</a>
          <a href="/products" className="block text-gray-700 hover:text-gray-900">Products</a>
          <a href="/categories" className="block text-gray-700 hover:text-gray-900">Categories</a>
          <a href="/deals" className="block text-gray-700 hover:text-gray-900">Deals</a>
          <a href="/contact" className="block text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      )}
    </nav>
  );
}
