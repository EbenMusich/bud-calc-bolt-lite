import React from "react";
import Layout from "../../components/Layout";

export default function YieldForecasting() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Yield Forecasting Calculator</h1>
        <p className="text-gray-600 mb-8">
          Forecast your total yield using lights, plants, or canopy area. Input expected yield per
          unit and harvest frequency to estimate annual production and potential revenue.
        </p>
        {/* Calculator mode toggle and output estimator go here */}
      </div>
    </Layout>
  );
}
