import ValueCards from "@/Components/Common/ValueCards";

const supplyChainDescriptions = [
  { title: "Optimized logistics", description: "faster and accurate delivery tracking." },
  { title: "Inventory control", description: "real-time stock monitoring." },
  { title: "Supplier collaboration", description: "improved communication with vendors." },
  { title: "Reduced costs", description: "lower warehousing expenses." },
  { title: "Scalability", description: "adapting to changing demands efficiently." },
  { title: "Customer satisfaction", description: "faster fulfillment and accurate tracking." },
  { title: "Risk management", description: "better planning and demand forecasting." },
  { title: "Integrated workflow", description: "seamless coordination between departments." },
];

export default function KeyFeatures() {
  return <ValueCards title="The Power of Supply Chain Management" descriptions={supplyChainDescriptions} />;
}
