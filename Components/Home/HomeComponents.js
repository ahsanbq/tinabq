import dynamic from "next/dynamic";

const Clients = dynamic(() => import("./Clients"));
const FreeTrial = dynamic(() => import("./FreeTrial"));
const Hero = dynamic(() => import("./Hero"));
const HomeContactUs = dynamic(() => import("./HomeContactUs"));
const OurProducts = dynamic(() => import("./OurProducts"));
const Services = dynamic(() => import("./Services"));

export default function HomeComponents({ heroData }) {
  const hero = heroData?.sections[0];
  // const products = heroData?.sections[1];

  return (
    <main>
      <div className='max-w-7xl mx-auto'>
        <Hero hero={hero} />
      </div>

      <div className='max-w-7xl mx-auto'>
        <OurProducts />
        <Services />
        <FreeTrial />
        <Clients />
        <HomeContactUs />
      </div>
    </main>
  );
}
