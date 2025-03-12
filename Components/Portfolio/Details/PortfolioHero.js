import Image from "next/image";

export default function PortfolioHero() {
  return (
    <>
      {/* Header Section */}
      <div className='text-center py-10 px-4 md:px-10 max-w-7xl mx-auto pt-20'>
        <h1
          className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent pb-8'
          style={{
            backgroundImage:
              "linear-gradient(257.72deg, rgba(1, 126, 132, 0.76) -0.55%, rgba(165, 48, 131, 0.76) 63.47%, rgba(156, 87, 137, 0.76) 105.57%)",
          }}
        >
          Konnecting Dots - A Comprehensive Software Listing Platform
        </h1>
        <p className='text-gray-500 text-md max-w-3xl mx-auto mb-7'>
          Explore Our Portfolio of Success: Highlighted Projects That Showcase
          Our Expertise and Commitment to Innovation
        </p>
      </div>

      {/* Single Image Section */}
      <div className='flex justify-center items-center px-4 md:px-0'>
        <div className='w-full '>
          <Image
            src='/images/portfolio/kd.jpeg' // Replace with your image path
            alt='Software Listing Platform Mockup'
            width={1500}
            height={600}
            className='rounded-lg  w-full object-cover'
          />
        </div>
      </div>

      {/* Details Section */}
      <div className='mt-10 border rounded-xl border-gray-200 py-6 px-4 md:px-0'>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          <div>
            <h3 className='text-lg font-bold text-gray-700'>Client</h3>
            <p className='text-gray-500'>Konnecting Dots</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-700'>Year</h3>
            <p className='text-gray-500'>2023</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-700'>Services</h3>
            <p className='text-gray-500'>Design & Development</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-700'>Platform</h3>
            <p className='text-gray-500'>Web & Mobile</p>
          </div>
        </div>
      </div>
    </>
  );
}
