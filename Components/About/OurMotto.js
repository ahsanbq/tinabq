import Image from "next/image";

const mottoData = [
  {
    titleImage: "/images/about/our-motto/30+.svg",
    number: "30+",
    description: "Frameworks & technologies currently in use",
    navLogo: "/images/about/our-motto/pinknav.svg",
    bgImage: "/images/about/our-motto/pinkbg.svg",
    textColor: "text-pink-600",
  },
  {
    titleImage: "/images/about/our-motto/45+.svg",
    number: "45+",
    description: "Developers, Designers, QA, PIA, Business analysts",
    navLogo: "/images/about/our-motto/greennav.svg",
    bgImage: "/images/about/our-motto/greenbg.svg",
    textColor: "text-green-600",
  },
  {
    titleImage: "/images/about/our-motto/50+.svg",
    number: "50+",
    description: "Production releases over the last year",
    navLogo: "/images/about/our-motto/violetnav.svg",
    bgImage: "/images/about/our-motto/violatebg.svg",
    textColor: "text-purple-600",
  },
  {
    titleImage: "/images/about/our-motto/15+.svg",
    number: "15+",
    description: "Years of making customers happy",
    navLogo: "/images/about/our-motto/bluenav.svg",
    bgImage: "/images/about/our-motto/bluebg.svg",
    textColor: "text-blue-600",
  },
];

const MottoCard = ({ titleImage, number, description, navLogo, bgImage, textColor }) => (
  <div className="relative flex flex-col justify-center h-48 rounded-lg overflow-hidden p-4 sm:p-6 bg-white">
    
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image src={bgImage} alt="Background" layout="fill" objectFit="cover" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 flex flex-col items-start space-y-2 sm:space-y-4">
      {/* Title Image */}
      {titleImage && <Image src={titleImage} alt="Title" width={40} height={40} />}

      {/* Number and Description */}
      <div className="space-y-1 sm:space-y-2">
        <h2 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>{number}</h2>
        <p className="text-left text-xs sm:text-sm text-black max-w-[150px] sm:max-w-[200px]">{description}</p>
      </div>
    </div>

    {/* Navigation Icon */}
    {navLogo && (
      <div className="absolute bottom-0 -right-2">
        <Image src={navLogo} alt="Navigate" width={84} height={84} className="bg-white rounded-full" />
      </div>
    )}
  </div>
);

const OurMotto = () => (
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
    {/* Title Section */}
    <div className="text-center mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Motto</h1>
      <ul className="mt-2 sm:mt-4 text-xs sm:text-sm flex flex-col md:flex-row justify-center space-y-1 sm:space-y-0 md:space-x-4 lg:space-x-6 text-gray-600">
        <li className="before:content-['•'] before:mr-2 before:text-gray-800">Develop novel markets.</li>
        <li className="before:content-['•'] before:mr-2 before:text-gray-800">Improve performance by system automation.</li>
        <li className="before:content-['•'] before:mr-2 before:text-gray-800">Increase profitability in the current market.</li>
      </ul>
    </div>

    {/* Responsive Motto Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {mottoData.map((data, index) => (
        <MottoCard key={index} {...data} />
      ))}
    </div>
  </div>
);

export default OurMotto;