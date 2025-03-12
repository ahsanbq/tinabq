// components/ProductsSection.js
import Image from "next/image";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const OurProducts = ({ products }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  // Use individual scroll progress hooks for each section
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["0 4", "1 1"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["0 3", "1 1"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["0 3", "1 1"],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: ref4,
    offset: ["0 3", "1 1"],
  });
  return (
    <section
      id='products'
      className='px-4 md:px-0  md:mt-24 mb-16 text-gray-400 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height  custom-header-padding'
    >
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-7 md:gap-12'>
          <>
            <motion.div
              className='w-full group'
              ref={ref1}
              style={{
                scale: scrollYProgress1,
                opacity: scrollYProgress1,
              }}
            >
              <div
                className='flex flex-col md:flex-row transition-all duration-500 cursor-pointer
   bg-[#f4dcea]   
    group-hover:bg-gradient-to-l group-hover:from-pink-500 group-hover:to-purple-950  
    text-gray-900  group-hover:text-white  rounded-3xl'
              >
                {/* Image Container - First on mobile */}
                <div className='flex items-center justify-center w-full px-8 py-8 border border-gray-200 bg-gray-50 rounded-s-3xl  rounded-e-3xl rounded-t-3xl md:rounded-r-[8%] md:w-2/3 order-1'>
                  <div className='transition-all duration-500 scale-100 group-hover:scale-110'>
                    <Image
                      className='object-cover object-center  w-full max-h-[350px]  my-0 md:my-10'
                      alt='product'
                      src='/images/home/home-product-1.svg'
                      width={400}
                      height={300}
                      priority
                      // objectFit='cover'
                    />
                  </div>
                </div>

                {/* Description Container - Second on mobile */}
                <div className='flex items-center justify-center p-4  w-full md:w-3/4 order-2'>
                  <div className='w-4/5  md:py-16'>
                    <h2 className='w-full mb-8 mt-8 md:mt-0 text-[1.7rem]  font-bold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] group-hover:text-white '>
                      bquick for small businesses
                    </h2>
                    <p className='w-full mb-8 leading-relaxed group-hover:text-white text-justify text-sm md:text-[16px]'>
                      bquick is very simple and easy to use. bquick online
                      software has all you need to manage your numbers
                      effortlessly. bquick is specially for non-accounting
                      people. You can access your business anytime, anywhere
                      from any internet-connected device like Computer, Laptop,
                      Tablet, Smartphone, etc.
                    </p>
                    {/* <button className='inline-flex px-6 py-2 text-sm md:text-lg text-white border-0 rounded-lg bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] group-hover:from-cyan-500 group-hover:to-cyan-500 focus:outline-none mb-5 md:mb-0'>
                      More details
                    </button> */}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='w-full group'
              ref={ref2}
              style={{
                scale: scrollYProgress2,
                opacity: scrollYProgress2,
              }}
            >
              <div
                className='flex flex-col md:flex-row transition-all duration-500 cursor-pointer 
    bg-[#dcf1fa] group-hover:bg-[#27aae1] 
    text-gray-900  group-hover:text-white  rounded-3xl'
              >
                {/* Image Container - First on mobile */}
                <div className='flex items-center justify-center w-full md:w-2/3 px-8 py-8 border border-gray-200 bg-gray-50 rounded-s-3xl  rounded-e-3xl rounded-t-3xl rounded-l-[8%] order-1 md:order-2'>
                  <div className='transition-all duration-500 scale-90 group-hover:scale-100'>
                    <Image
                      className='object-cover object-center  w-full max-h-[350px] my-0 md:my-10'
                      alt='product'
                      src='/images/home/img-product-05.svg'
                      width={400}
                      height={300}
                    />
                  </div>
                </div>

                {/* Description Container - Second on mobile */}
                <div className='flex items-center justify-center px-4  w-full md:w-3/4 order-2 md:order-1'>
                  <div className='w-4/5 py-10 md:py-16'>
                    <h2 className='w-full mb-10 text-[1.7rem] font-bold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] group-hover:text-white'>
                      We are proud to introduce Odoo in Bangladesh
                    </h2>
                    <p className='w-full mb-10 leading-relaxed group-hover:text-white text-sm md:text-[16px] text-justify'>
                      We are an Official Partner of Odoo and have 10+ years of
                      experience in the field of Odoo / OpenERP and, in addition
                      to extensive technical know-how, we also have in-depth
                      business knowledge.
                    </p>
                    <Link href='/service'>
                    
                    <button className='inline-flex px-6 py-2 text-sm md:text-lg text-white border-0 rounded-lg bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] focus:outline-none'>
                      More details
                    </button>
                    </Link> 
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref4}
              style={{
                scale: scrollYProgress4,
                opacity: scrollYProgress4,
              }}
              className='flex flex-col md:flex-row md:gap-12'
            >
              {/* Image Container - Changed order for mobile screens */}
              <div className='flex w-full h-full md:w-2/5 order-1 md:order-2'>
                <div className='flex items-center md:justify-end justify-center w-full  md:ps-8  md:py-8'>
                  <div className='transition-all duration-500 scale-100 cursor-pointer hover:scale-100'>
                    <Image
                      className='object-cover object-center w-full'
                      alt='product'
                      src='/images/home/team-home-5.svg'
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              {/* Description Container */}
              <div className='flex w-full h-full md:w-2/3 order-2 md:order-1'>
                <div className='px-0 md:py-12 text-gray-900 md:pe-20'>
                  <h2 className='mb-6 md:mb-16 text-[1.7rem]  font-bold title-font sm:text-4xl bg-clip-text  mt-6'>
                    Enhance Your Team's Capabilities with Staff Augmentation
                  </h2>
                  <p className='mb-6 md:mb-12 leading-relaxed text-sm md:text-[18px] pe-0  text-justify'>
                    Staff augmentation empowers your business by seamlessly
                    integrating skilled professionals into your existing team,
                    filling critical skill gaps and boosting productivity.
                    Whether you need temporary expertise for a specific project
                    or long-term support to scale your operations, this flexible
                    approach allows you to access top talent while maintaining
                    control over your processes. Enhance your team’s
                    capabilities, meet deadlines with confidence, and drive
                    success with the right resources, right when you need them.
                  </p>
                  {/* <div className='flex w-full'>
                    <button className='inline-flex items-center justify-center px-6 py-2 text-sm md:text-lg text-white rounded-lg bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-800  hover:to-purple-800'>
                      Hire The Best Team{" "}
                      <img
                        className='ps-4'
                        src='/images/icon/icon-Arrow-r.svg'
                        alt='Arrow Right'
                      />
                    </button>
                  </div> */}
                  <div className='flex mt-10'>
                    <button
                      onClick={() =>
                        window.open(
                          "https://erp.binaryquest.com/calendar/schedule-an-online-meeting-2",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className='inline-flex items-center text-white bg-gradient-to-tr hover:from-[#691FB1] hover:to-[#6039BC]  from-[#70499B] via-[#A62D82] to-[#CB1A71] transition-all duration-700 focus:outline-none py-2 px-6 rounded-lg text-sm md:text-lg'
                    >
                      Book a Meeting
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
