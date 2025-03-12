export default function ServiceHero() {
  return (
    <section
      id='hero-section'
      className='flex flex-col-reverse items-center justify-center mt-10 md:mt-24 mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 sm:px-4 xl:px-0'
    >
      <div className='container flex flex-col items-center  md:flex-row bg-no-repeat justify-center'>
        {/* Text content - second on mobile, first on desktop */}
        <div className='flex flex-col items-center w-full text-center bg-left-top bg-contain md:w-3/4 md:items-start md:text-left md:mb-0 order-2 md:order-1 md:ps-14 '>
          <h1 className='text-3xl uppercase font-semibold title-font sm:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-cyan-800 to-pink-500 '>
            All your business
            <br />
            on one platform.
          </h1>
          <p className='mb-16 mt-5 '>Simple, efficient, yet affordable!</p>
          <div className='flex w-full justify-center md:justify-start'>
            <button className='inline-flex items-center justify-center px-6 py-2 text-lg text-white rounded bg-[#93407D] hover:bg-purple-900'>
              Request a Demo
            </button>
          </div>
        </div>

        {/* Image - first on mobile, second on desktop */}
        <div className='w-full md:w-2/4 order-1 md:order-2'>
          {/* Using Next.js Image component for optimized image loading */}
          <img
            className='object-cover object-center w-full'
            alt='product'
            src='/images/home/img-product-05.svg'
            placeholder='blur' // Optional: if you're using a blur placeholder
          />
        </div>
      </div>
    </section>
  );
}
