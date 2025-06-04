import React from "react";
import Layout from "../../components/Layout";

export default function SOPTimeTracker() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">SOP Time Tracker</h1>
        <p className="text-gray-600 mb-8">
          Record how long each task in your SOP takes, and track labor efficiency across employees,
          product types, or time periods. Useful for dialing in cost per unit and time-per-step.
        </p>
        {/* Calculator form and tracking logic will go here */}
      </div>
    </Layout>
  );
}