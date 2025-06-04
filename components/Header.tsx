import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-10 bg-transparent text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">BUD Calculator</h1>
        <nav className="hidden md:flex space-x-4">
  <Link href="/" className="hover:underline">Home</Link>
  <Link href="/calculators" className="hover:underline">Calculators</Link>
  <Link href="/resources" className="hover:underline">Resources</Link>
  <Link href="/contact" className="hover:underline">Contact</Link>
</nav>
      </div>
    </header>
  );
}

