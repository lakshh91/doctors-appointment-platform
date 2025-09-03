"use client";

import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Pricing</h1>
      <PricingTable
        products={[
          {
            name: "Basic",
            description: "Book up to 5 appointments",
            prices: [{ id: "cplan_32AwVeQhZIQyRHq663YVHhMgBcJ", name: "Monthly" }],
          },
          {
            name: "Pro",
            description: "Unlimited appointments, priority support",
            prices: [{ id: "cplan_32AwVeQhZIQyRHq663YVHhMgBcJ", name: "Monthly" }],
          },
          {
            name: "Enterprise",
            description: "Custom features, dedicated support",
            prices: [{ id: "cplan_32AwVeQhZIQyRHq663YVHhMgBcJ", name: "Monthly" }],
          },
        ]}
      />
    </div>
  );
}
