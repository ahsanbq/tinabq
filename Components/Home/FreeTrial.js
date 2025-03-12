import useWindowSize from "@/hooks/useWindowSize";

const FreeTrial = () => {
  const size = useWindowSize();
  const isMobile = size?.width <= 720; // Adjust breakpoint as needed

  return (
    <section
      id='free-trial'
      className='mt-14 md:mt-24 mb-4 text-gray-400 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 md:px-0'
    >
      <div className='container mx-auto'>
        <div className='w-full'>
          <div
            className='border text-black py-2 md:py-8 rounded-3xl'
            style={{
              background:
                "linear-gradient(258.96deg, rgba(112, 73, 155, 0.3268) 10.25%, rgba(39, 170, 225, 0.1292) 36.34%, rgba(166, 45, 130, 0.0456) 59.78%)",
            }}
          >
            <div
              className='px-4 py-6 bg-right bg-no-repeat bg-contain sm:px-16 sm:py-10'
              style={{
                backgroundImage:
                  size?.width <= 1200
                    ? "url(images/home/globe-img.svg)"
                    : "url(images/home/Globe-1.svg)",
              }}
            >
              <h4 className='mb-4 md:mb-16 text-xl text-bold md:text-[#EC008C]'>
                Want to know more?
              </h4>
              <div className='text-black text-3xl sm:text-[55px] mb-4 font-medium w-full md:w-1/2 lg:w-2/3 '>
                <p className='leading-none font-bold '>
                  Feel free to join a{/* {isMobile ? ( */}
                  <span className='leading-tight'>
                    <br />
                    <span className='text-[#EC008C]'>30</span> mins meeting
                  </span>
                  {/* ) : (
                    " a 30 mins meeting"
                  )} */}
                </p>
              </div>
              <div className='flex mt-4 md:mt-10'>
                <button
                  onClick={() =>
                    window.open(
                      "https://erp.binaryquest.com/calendar/schedule-an-online-meeting-2",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className='text-white bg-gradient-to-tr hover:from-[#691FB1] hover:to-[#6039BC] from-[#70499B] via-[#A62D82] to-[#CB1A71] transition-all duration-700 focus:outline-none py-2 px-6 rounded-lg text-sm md:text-lg'
                >
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
