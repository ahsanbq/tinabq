import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 mb-20 mt-12">
      {/* Content with background SVGs */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Section with Left SVG behind it */}
        <div className="relative">
          {/* Left SVG positioned behind text */}
          <div className="hidden md:block absolute -left-16 lg:-left-20 xl:-left-24 top-1/2 w-32 lg:w-44 xl:w-64 z-0">
            <Image
              src="/images/about/hero/hero-left.svg"
              alt="Left Background"
              width={256}
              height={256}
              className="w-full opacity-100"
            />
          </div>
          
          {/* Text content on top */}
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900">Who We Are</h1>
            <p className="mt-4 text-gray-600">
            Our client roster includes local and national companies and government agencies. All have come to count on our company for smart, strategic, cost-effective solutions to their advertising and marketing needs. We continue to stay up-to-date with the most recent advances in cutting-edge technologies so that we can compete with the rest of the World ICT market. Our performance oriented business strategy builds on our expertise in consultancy, technology and outsourcing to help clients perform at the best levels so they can create sustainable value for their customers and shareholders. Using our global industry knowledge, service-offering excellence and technology expertise, we identify new business domains and technology trends whereas develop solutions for our clients around the world. 
            </p>
          </div>
        </div>

        {/* Image Section with Right SVG behind it */}
        <div className="relative">
          {/* Right SVG positioned behind image - ENLARGED */}
          <div className="hidden md:block absolute -right-16 lg:-right-20 xl:-right-28 -top-40 w-64 lg:w-80 xl:w-96 z-0">
            <Image
              src="/images/about/hero/hero-right.svg"
              alt="Right Background"
              width={542.6}        
              height={ 894.4}
              className="w-full opacity-100"
            />
          </div>
          
          {/* Hero image on top */}
          <div className="relative z-10 overflow-hidden">
            <Image
              src="/images/about/hero/hero-image.svg"
              alt="Team Meeting"
              width={600}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile SVGs that appear only on smaller screens */}
      <div className="md:hidden">
        <div className="absolute left-0 top-1/4 w-16 opacity-50">
          <Image
            src="/images/about/hero/hero-left.png"
            alt="Left Background"
            width={64}
            height={64}
            className="w-full"
          />
        </div>
        <div className="absolute right-0 top-8 w-24 opacity-50">
          <Image
            src="/images/about/hero/hero-right.svg"
            alt="Right Background"
            width={96} 
            height={96}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;