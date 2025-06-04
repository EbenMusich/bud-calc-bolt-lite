import React from "react";
import Layout from "../../components/Layout";

export default function GummyRecipeGenerator() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Gummy Recipe Generator</h1>
        <p className="text-gray-600 mb-8">
          Generate a custom gummy recipe based on your desired dose per piece, number of pieces,
          and distillate potency. This tool helps edible makers quickly calculate how much THC to add
          and how much base mixture to prepare.
        </p>
        {/* Recipe form and dosage logic will go here */}
      </div>
    </Layout>
  );
}