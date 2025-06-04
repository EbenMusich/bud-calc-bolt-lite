import React from "react";
import Layout from "../../components/Layout";

export default function InfusionDosage() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Infusion Dosage Calculator</h1>
        <p className="text-gray-600 mb-8">
          Calculate how much distillate or infused oil you need to reach your desired dose per
          serving. Enter potency, total servings, and target mg of THC/CBD per piece.
        </p>
        {/* Calculator form and results go here */}
      </div>
    </Layout>
  );
}
