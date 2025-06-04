import React, { useState } from "react";
import Layout from "../../components/Layout";
import CalculatorGrid from "../../components/CalculatorGrid";
import { calculators } from "../../data/calculatorData";

export default function CalculatorsPage() {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Cultivation", "Extraction", "Edibles", "Business"];

  const filteredCalculators = calculators.filter(
    (calc) => category === "All" || calc.category === category
  );

  return (
    <Layout>
      <div className="min-h-screen py-16">
        {/* Explainer Hero */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            Free Cannabis Business Calculators
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            From cultivators to extractors, these tools help you break down costs, forecast yields,
            price products, and improve efficiency. No logins. No fluff.
          </p>
        </section>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((label) => (
            <button
              key={label}
              onClick={() => setCategory(label)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === label
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Calculator Grid */}
        <CalculatorGrid calculators={filteredCalculators} />

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Want to go deeper into costing or production?
          </p>
          <a
            href="/resources"
            className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow transition-colors duration-300"
          >
            Explore Resources
          </a>
        </section>
      </div>
    </Layout>
  );
}