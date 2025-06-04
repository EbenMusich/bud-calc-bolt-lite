import React from "react";
import Layout from "../../components/Layout";

export default function ProfitMarginCalculator() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Profit Margin Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate profit per unit by entering cost of goods sold (COGS), packaging, labor, and
          sale price. See gross margin and net margin instantly.
        </p>
        {/* Calculator form and margin results go here */}
      </div>
    </Layout>
  );
}
