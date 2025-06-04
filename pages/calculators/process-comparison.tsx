import React from "react";
import Layout from "../../components/Layout";

export default function ProcessComparison() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Process Comparison Calculator</h1>
        <p className="text-gray-600 mb-8">
          Compare labor time, input material, and output efficiency across two different
          production processes. Ideal for making data-driven decisions between workflows.
        </p>
        {/* Calculator form and comparison results go here */}
      </div>
    </Layout>
  );
}
