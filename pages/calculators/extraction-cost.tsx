import React from "react";
import Layout from "../../components/Layout";

export default function ExtractionCost() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Extraction Cost Calculator</h1>
        <p className="text-gray-600 mb-8">
          Estimate the total cost of concentrate production including solvent usage, yield percentage,
          labor, and time. Great for tracking extraction efficiency and cost-per-gram.
        </p>
        {/* Calculator form and logic goes here */}
      </div>
    </Layout>
  );
}