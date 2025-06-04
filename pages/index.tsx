import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <Hero />
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Cultivation Tools</h3>
            <p className="text-gray-600">Calculate costs per gram, forecast yields, and optimize your grow operations.</p>
            <Link
              href="/calculators?category=Cultivation"
              className="inline-block text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View Tools →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Extraction Tools</h3>
            <p className="text-gray-600">Track recovery rates, estimate batch yields, and monitor processing costs.</p>
            <Link
              href="/calculators?category=Extraction"
              className="inline-block text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View Tools →
            </Link>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Business Tools</h3>
            <p className="text-gray-600">Plan production goals, calculate margins, and allocate costs effectively.</p>
            <Link
              href="/calculators?category=Business"
              className="inline-block text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View Tools →
            </Link>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to optimize your operations?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our free calculators help cannabis businesses make data-driven decisions.
            No registration required.
          </p>
          <Link
            href="/calculators"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-700 bg-white hover:bg-emerald-50 rounded-lg transition-colors duration-200 min-h-[44px] shadow-sm"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </Layout>
  );
}