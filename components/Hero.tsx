import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-slate-100 rounded-2xl p-8 md:p-12 text-center mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Smart Tools for Cannabis Business
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
        From cultivation to extraction, our calculators help you optimize costs,
        boost efficiency, and grow sustainably — no sign-up required.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/calculators"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-200 min-h-[44px] shadow-sm"
        >
          View Calculators
        </Link>
        <Link
          href="/resources"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors duration-200 min-h-[44px]"
        >
          Browse Resources
        </Link>
      </div>
    </div>
  );
}