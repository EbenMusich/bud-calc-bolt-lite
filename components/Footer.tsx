import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} BUD Calculator. All rights reserved.
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Home
          </Link>
          <Link href="/calculators" className="hover:text-green-200 transition-colors">
            Calculators
          </Link>
          <Link href="/contact" className="hover:text-green-200 transition-colors">
            Contact
          </Link>
          <Link href="/terms" className="hover:text-green-200 transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-green-200 transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}