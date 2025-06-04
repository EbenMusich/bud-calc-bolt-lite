import React from "react";
import Layout from "../../components/Layout";

export default function LaborCostPerPlant() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Labor Cost Per Plant</h1>
        <p className="text-gray-600 mb-8">
          Enter total labor time, hourly wage, and number of plants to estimate labor cost per plant
          and productivity metrics like units per hour.
        </p>
        {/* Calculator form and logic go here */}
      </div>
    </Layout>
  );
}
