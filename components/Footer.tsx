import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-sm py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>&copy; 2025 BUD Calculator. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/calculators" className="hover:underline">Calculators</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
