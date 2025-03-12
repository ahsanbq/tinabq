import Image from "next/image";

const values = [
  {
    title: "Innovative",
    description:
      "Innovative solutions drive progress and efficiency. We embrace creativity and technology to develop cutting-edge products that meet evolving market demands, ensuring our clients stay ahead in a competitive landscape.",
    color: "text-pink-600",
    bgColor: "border-pink-300",
    icon: "/images/about/our-values/innovative.svg",
  },
  {
    title: "Honesty",
    description:
      "Honesty is our foundation. We believe in transparent communication and ethical practices, fostering trust and integrity in our relationships. This enables us to build lasting connections with clients and partners.",
    color: "text-green-600",
    bgColor: "border-green-300",
    icon: "/images/about/our-values/honesty.svg",
  },
  {
    title: "Collaboration",
    description:
      "Collaboration fuels our success. By working together across teams and with clients, we harness diverse perspectives and expertise, fostering innovation and achieving shared goals that drive meaningful results and growth.",
    color: "text-blue-600",
    bgColor: "border-blue-300",
    icon: "/images/about/our-values/collaboration.svg",
  },
  {
    title: "Accountability",
    description:
      "We are accountable for our actions and decisions, ensuring trust and responsibility in every step. This commitment fosters stronger relationships with partners and team members.",
    color: "text-purple-600",
    bgColor: "border-purple-300",
    icon: "/images/about/our-values/account.svg",
  },
];

export default function OurValues() {
  return (
    <div className="text-start p-6">
      <h2 className="text-4xl font-bold text-center mt-20 text-gray-900">Our values that guide all our business activities are</h2>
      <p className="text-sm text-gray-600 mt-2 text-center mt-6 mb-20">
        Creating Transformative Partnerships: A Model for Collaborative Growth, Innovation, and Sustainable Success
      </p>
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`border rounded-lg px-6 py-12  ${value.bgColor}`}
          >
            <div className="flex items-center mb-4">
              <Image src={value.icon} alt={value.title} width={48} height={48} className="mr-2" />
              <h3 className={`text-lg font-semibold ${value.color}`}>{value.title}</h3>
            </div>
            <p className="text-gray-600 text-sm text-justify">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}