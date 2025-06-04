import React from "react";
import Layout from "../../components/Layout";

export default function DecarboxylationCalculator() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Decarboxylation Calculator</h1>
        <p className="text-gray-600 mb-8">
          Estimate the final activated THC and CBD content after decarboxylation. Enter starting potency and expected loss to get accurate post-process values.
        </p>
        {/* Calculator form and THC loss logic will go here */}
      </div>
    </Layout>
  );
}