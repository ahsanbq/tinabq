import ValueCards from "../Common/ValueCards";

const productDescriptions = [
  { title: "Improved business ", description: "from real-time reports." },
  { title: "Lower operational costs", description: "through streamlined processes." },
  { title: "Enhanced collaboration", description: "users sharing data efficiently." },
  { title: "Improved efficiency", description: "standardized business processes." },
  { title: "Consistent infrastructure", description: "uniform system architecture." },
  { title: "Higher user adoption", description: "easy-to-use design system." },
  { title: "Reduced risk", description: "better financial control measures." },
  { title: "Lower management costs", description: "integrated and simplified systems." },
];

export default function ProductValues() {
  return <ValueCards title="The Business Value of ERP" descriptions={productDescriptions} />;
}
