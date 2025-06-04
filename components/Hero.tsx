import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-800 text-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-800 dark:text-gray-200">
          Free Tools for Smarter Cannabis Businesses
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          From cultivators to extractors, our calculators help you cut costs,
          boost margins, and grow sustainably — no fluff, no logins.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors duration-200 min-h-[44px] shadow-sm"
          >
            Explore Calculators
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors duration-200 min-h-[44px]"
          >
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  );
}