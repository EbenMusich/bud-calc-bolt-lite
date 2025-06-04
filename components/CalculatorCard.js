import React from 'react';
import Link from 'next/link';

export default function CalculatorCard({ calculator }) {
  return (
    <Link 
      href={`/calculators/${calculator.slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl"
    >
      <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 dark:hover:bg-gray-700 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {calculator.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {calculator.description}
        </p>
        <span className="inline-block text-xs font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
          {calculator.category}
        </span>
      </div>
    </Link>
  );
}