import React from "react";
import Layout from "../../components/Layout";

export default function EdiblesUnitCost() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Edibles Unit Cost Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate cost per unit and per milligram of THC in your edibles by entering batch size,
          ingredients, labor cost, and potency. Ideal for edible manufacturers optimizing pricing.
        </p>
        {/* Calculator form and logic goes here */}
      </div>
    </Layout>
  );
}
