import React from "react";
import Layout from "../../components/Layout";

export default function ProductionGoalPlanner() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Production Goal Planner</h1>
        <p className="text-gray-600 mb-8">
          Set production or revenue targets and calculate how many batches or units you need to
          complete to hit your goals. Ideal for scheduling and team planning.
        </p>
        {/* Calculator form and goal logic will go here */}
      </div>
    </Layout>
  );
}
