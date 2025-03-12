import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import editAnimation from "./../../public/images/animation/calendar/calendar.json";
export default function Hero({ hero }) {
  const size = useWindowSize();
  const description =
    "Specializes in crafting custom solutions and products designed to meet unique business requirements, ensuring enhanced efficiency and sustainable growth.";
  const heroImage = "/images/home/hero-img-01.svg";
  const isMobile = size.width <= 640;
  const [text] = useTypewriter({
    words: [
      "MANUFACTURING",
      "RETAIL",
      "TELECOM",
      "HEALTHCARE",
      "FINTECH",
      "EDUCATION",
      "AUTOMOTIVE",
      "STARTUP",
      "ECOMMERCE",
      "SOFTWARE",
      "Sports",
    ],
    loop: true, // Set to true for looping animation
    delaySpeed: 1500, // Delay between words
    typeSpeed: 120, // Speed of typing
    deleteSpeed: 80, // Speed of deleting
  });

  // const [firstWord, secondWord] = text.split(" ");
  return (
    <section
      id='hero-section'
      className=' flex flex-col-reverse md:flex-row-reverse items-center justify-center px-4 sm:px-4 xl:px-0 gap-12 mt-8 md:mt-24 mb-4 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height '
    >
      <div
        className='container flex flex-col items-center gap-12 md:flex-row bg-no-repeat custom-header-padding'
        style={{
          backgroundImage: isMobile
            ? "none" // No background image for mobile screens
            : "url('/images/home/bg-hero-section.svg')",
        }}
      >
        {/* This div contains the hero image, will be shown first on mobile */}
        <div className='w-full md:w-1/2 order-1 md:order-2'>
          <Image
            className='object-cover object-center rounded'
            alt='hero'
            src={heroImage}
            width={730}
            height={461}
            priority
          />
        </div>

        {/* This div contains the text content */}
        <div className='flex flex-col items-flex-start  w-full mb-16 bg-left-top bg-contain md:w-1/2 md:items-start md:text-left md:mb-0 order-2 md:order-1'>
          <h1 className='mb-4 text-[1.7rem] md:text-5xl font-bold text-black sm:text-5xl  leading-[1.5]'>
            <span className='text-purple-800 mb-4 leading-[1.5]'>
              SOFTWARE,
            </span>{" "}
            APP FOR <br />
            <span className='text-[#ec008c] w-64 md:w-80 inline-block '>
              {text}
            </span>
            <br />
            <span className='text-black uppercase leading-[1.5]'>
              Industries
            </span>
          </h1>
          <p className='mb-8 leading-relaxed text-gray-900  text-justify'>
            {description}
          </p>
          <div className='flex flex-row justify-center w-full sm:w-auto md:w-2/3 md:justify-start gap-4'>
            <button
              onClick={() =>
                window.open(
                  "https://erp.binaryquest.com/calendar/schedule-an-online-meeting-2",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className='flex justify-center w-full sm:w-auto text-white bg-gradient-to-tr hover:from-[#691FB1] hover:to-[#6039BC]  from-[#70499B] via-[#A62D82] to-[#CB1A71] border-0 py-2 px-6 focus:outline-none rounded-lg text-md md:text-lg transition-all duration-300 ease-in-out'
            >
              <div className='edit-icon me-2'>
                <Lottie
                  animationData={editAnimation}
                  loop={true}
                  style={{ width: 25, height: 25 }} // Adjust size as needed
                  speed={0.2}
                />
              </div>
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
