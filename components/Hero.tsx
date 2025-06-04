import React from "react";

export default function Hero() {
  return (
    <section className="bg-white text-gray-900 text-center px-6 pt-32 pb-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
        Free Tools for Smarter Cannabis Businesses
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        From cultivators to extractors, our calculators help you cut costs,
        boost margins, and grow sustainably — no fluff, no logins.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/calculators"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow transition"
        >
          Explore Calculators
        </a>
        <a
          href="/resources"
          className="text-green-600 hover:underline font-medium py-3 px-8"
        >
          Browse Resources
        </a>
      </div>
    </section>
  );
}
