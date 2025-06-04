import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-green-200 transition-all duration-200"
          >
            BUD Calculator
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-white hover:text-green-200 hover:underline transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="/calculators" 
              className="text-white hover:text-green-200 hover:underline transition-all duration-200"
            >
              Calculators
            </Link>
            <Link 
              href="/resources" 
              className="text-white hover:text-green-200 hover:underline transition-all duration-200"
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-green-200 hover:underline transition-all duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="py-4 space-y-4">
            <Link 
              href="/" 
              className="block text-white hover:text-green-200 hover:underline transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/calculators" 
              className="block text-white hover:text-green-200 hover:underline transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculators
            </Link>
            <Link 
              href="/resources" 
              className="block text-white hover:text-green-200 hover:underline transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-green-200 hover:underline transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}