import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Cultivation Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Calculate costs per gram, forecast yields, and optimize your grow operations.
              </p>
              <Link
                href="/calculators?category=Cultivation"
                className="inline-block text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
              >
                View Tools →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Extraction Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track recovery rates, estimate batch yields, and monitor processing costs.
              </p>
              <Link
                href="/calculators?category=Extraction"
                className="inline-block text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
              >
                View Tools →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Business Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Plan production goals, calculate margins, and allocate costs effectively.
              </p>
              <Link
                href="/calculators?category=Business"
                className="inline-block text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
              >
                View Tools →
              </Link>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 text-center border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to optimize your operations?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our free calculators help cannabis businesses make data-driven decisions.
              No registration required.
            </p>
            <Link
              href="/calculators"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors duration-200 min-h-[44px] shadow-sm"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}