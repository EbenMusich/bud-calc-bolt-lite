import React from "react";
import Layout from "../../components/Layout";

export default function THCLossTracker() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">THC Loss Tracker</h1>
        <p className="text-gray-600 mb-8">
          Track THC content from raw material to final product. Identify where potency is lost during
          grinding, decarbing, infusion, and final packaging.
        </p>
        {/* Calculator form and THC loss logic goes here */}
      </div>
    </Layout>
  );
}

