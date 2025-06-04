import React from "react";
import Layout from "../../components/Layout";

export default function CostPerUnit() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Cost Per Unit Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate the cost per gram or pound of cannabis by entering your total costs and output weight. Ideal for cultivators looking to track profitability.
        </p>
        {/* Calculator form goes here */}
      </div>
    </Layout>
  );
}