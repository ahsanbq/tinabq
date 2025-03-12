import BlogCard from "./Card/BlogCard";

function Hero() {
  return (
    <section
      id='hero-section'
      className='flex flex-col  p-6 items-center justify-center  mb-4  md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 sm:px-6 xl:px-0  bg-[linear-gradient(268.87deg,_rgba(1,126,132,0.0988)_4.8%,_rgba(166,45,130,0.0988)_103.97%,_rgba(156,87,137,0.0304)_103.97%)]'
    >
      <div className='container mt-8 flex flex-col items-center gap-8 md:flex-row justify-center w-full max-w-6xl'>
        {/* Text content - should be above the card on mobile, below on desktop */}
        <div className='flex flex-col items-center w-full text-center md:w-3/4 md:items-start md:text-left md:mb-0 order-1 md:order-1'>
          <h1 className='mb-4 text-3xl uppercase font-semibold title-font sm:text-5xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-cyan-800 to-pink-500'>
            Boost Your Business with Custom Software and Creative Design
          </h1>
        </div>

        {/* Card Section - should be below the title on mobile, above on desktop */}
        <div className='flex justify-center w-full md:w-2/4 order-2 md:order-2'>
          {/* Using Next.js Image component for optimized image loading */}
          <div className='w-full mb-12 max-w-md md:max-w-[600px]'> {/* Increased max width for the BlogCard */}
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
