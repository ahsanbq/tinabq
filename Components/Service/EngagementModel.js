import Image from "next/image";
import Link from "next/link";
export default function EngagementModel() {
  return (
    <div className='px-4 sm:px-4 xl:px-0'>
      <h1 className='flex items-center justify-center text-center w-full mb-16 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white '>
        Engagement Model
      </h1>
      <div>
        <div className='flex flex-col md:flex-row gap-6 mb-10'>
          <div className='flex w-full h-full md:w-1/2 bg-[#FFEDFC] rounded-xl'>
            <div className='px-12 py-10 text-gray-900'>
              <h2 className='mb-5 text-lg font-bold title-font sm:text-2xl bg-clip-text  text-[#686666]'>
                Team Augmentation
              </h2>
              <p className='mb-6 leading-relaxed font-16 text-justify text-[#6B6B6B]'>
                We are able to provide clients an unfair advantage by leveraging
                talent pools from unsaturated markets, resulting in offshore or
                onshore teams that provide better cost advantages and higher
                retention of talent. Our delivery center and give us access to a
                high-caliber talent pool in markets
              </p>
              <div className='flex w-full'>
              <Link href="/service/teamaugmentation">
  <button className='inline-flex items-center justify-center px-6 py-1 text-lg text-[#ddd7d7] rounded bg-[#9D4F91] hover:bg-pink-700'>
    Read More
  </button>
</Link>
              </div>
            </div>
          </div>
          <div className='flex w-full h-full md:w-1/2'>
            <div className='flex items-center justify-center w-full  '>
              <div className='transition-all duration-500 scale-100 cursor-pointer hover:scale-110'>
                <Image
                  className='object-cover object-center w-full'
                  alt='product'
                  src='/images/service/team-augmentation.svg'
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex w-full h-full md:w-1/2'>
            <div className='flex items-center justify-center w-full  '>
              <div className='transition-all duration-500 scale-100 cursor-pointer hover:scale-110'>
                <Image
                  className='object-cover object-center w-full'
                  alt='product'
                  src='/images/service/dedicated.svg'
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
          <div className='flex w-full h-full md:w-1/2 bg-[#ECFFFC] rounded-xl'>
            <div className='px-10 py-10 text-gray-900'>
              <h2 className='mb-5 text-lg font-bold title-font sm:text-2xl bg-clip-text  text-[#686666]'>
                Dedicated Team
              </h2>
              <p className='mb-6 leading-relaxed font-16 text-justify text-[#6B6B6B]'>
                We are able to provide clients an unfair advantage by leveraging
                talent pools from unsaturated markets, resulting in offshore or
                onshore teams that provide better cost advantages and higher
                retention of talent. Our delivery center and give us access to a
                high-caliber talent pool in markets like Bangladesh and Croatia.
                This allows us to deliver higher
              </p>
              <div className='flex w-full'>
                <button className='inline-flex items-center justify-center px-6 py-1 text-lg text-[#ddd7d7] rounded bg-[#00CEB3]  hover:bg-pink-700 '>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
