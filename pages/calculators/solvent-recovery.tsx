import React from "react";
import Layout from "../../components/Layout";

export default function SolventRecovery() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Solvent Recovery Calculator</h1>
        <p className="text-gray-600 mb-8">
          Track the amount of solvent used, recovered, and lost during extraction runs. Understand
          your recovery efficiency and improve resource management over time.
        </p>
        {/* Calculator form and efficiency logic will go here */}
      </div>
    </Layout>
  );
}
