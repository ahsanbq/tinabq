export default function ProductHero() {
  return (
    <section
      id='hero-section'
      className='flex flex-col-reverse items-center justify-center px-4 sm:px-4 xl:px-0  md:mt-24 mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'
    >
      <div className='container flex flex-col items-center gap-12 md:flex-row bg-no-repeat'>
        {/* Text content - appears second on mobile, first on desktop */}
        <div className='flex flex-col items-center w-full text-center bg-left-top bg-contain md:w-3/4 md:items-start md:text-left md:mb-0 order-2 md:order-1'>
          <h1 className='mb-16 text-3xl uppercase font-semibold title-font sm:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-cyan-800 to-pink-500'>
            Streamline Your
            <br />
            Business with Enterprise
            <br />
            Resource Planning (ERP)
          </h1>
          <div className='flex w-full justify-center md:justify-start'>
            <button className='inline-flex items-center justify-center px-6 py-2 text-lg text-white rounded bg-pink-700 hover:bg-purple-900'>
              Book a Meeting
            </button>
          </div>
        </div>

        {/* Image - appears first on mobile, second on desktop */}
        <div className='w-full md:w-2/4 order-1 md:order-2'>
          <img
            className='object-cover object-center w-full'
            alt='product'
            src='/images/product/img-product-06.svg'
            placeholder='blur' // Optional: if you're using a blur placeholder
          />
        </div>
      </div>
    </section>
  );
}
