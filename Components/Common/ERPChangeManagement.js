const ERPChangeManagement = () => {
  return (
    <section
      id='chng-management'
      className='flex w-full mt-12 mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 sm:px-4 xl:px-0'
    >
      <div className='container flex flex-col justify-center px-1 py-4 mx-auto md:flex-row'>
        <div className='w-full'>
          <div className='flex flex-col md:flex-row gap-8 w-full justify-center text-gray-900 mb-16 dark:text-white'>
            <div className='w-full md:w-1/4 text-2xl text-center md:text-start font-bold md:text-3xl'>
              <p>ERP Change Management:</p>
              <p>Best Practices</p>
            </div>
            <div className='w-full md:w-1/2 text-sm pt-2 text-justify dark:text-white px-4 md:px-0'>
              While custom ERP software comes with an array of personalized
              features carefully designed to synergize with your existing
              corporate workflows, post-release user support and change
              management are essential aspects of a successful adoption strategy
              we focus on.
            </div>
          </div>

          <div className='flex flex-wrap'>
            <div className='p-4 w-full xl:w-1/4 md:w-1/2'>
              <div className='bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] p-2 mb-6'></div>
              <div className='cursor-pointer min-h-60'>
                <h2 className='text-4xl font-bold mb-4'>
                  <span className='text-[#EC008C]'>Impact</span>
                  <br />
                  <span className='dark:text-white'>assessment</span>
                </h2>
                <p className='text-base leading-relaxed text-justify dark:text-white'>
                  An estimate of the potential benefits of ERP implementation
                  and related challenges to set up a suitable adoption plan.
                </p>
              </div>
            </div>

            <div className='p-4 w-full xl:w-1/4 md:w-1/2'>
              <div className='bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] p-2 mb-6'></div>
              <div className='cursor-pointer min-h-60'>
                <h2 className='text-4xl font-bold mb-4'>
                  <span className='text-[#45BDE8]'>Workflow</span>
                  <br />
                  <span className='dark:text-white'>adjustments</span>
                </h2>
                <p className='text-base leading-relaxed text-justify dark:text-white'>
                  Typically limited process changes aimed at better integrating
                  a custom ERP system into your day-to-day business operations.
                </p>
              </div>
            </div>

            <div className='p-4 w-full xl:w-1/4 md:w-1/2'>
              <div className='bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] p-2 mb-6'></div>
              <div className='cursor-pointer min-h-60'>
                <h2 className='text-4xl font-bold mb-4'>
                  <span className='text-[#97C253]'>Training &</span>
                  <br />
                  <span className='dark:text-white'>support</span>
                </h2>
                <p className='text-base leading-relaxed text-justify dark:text-white'>
                  Typically limited process changes aimed at better integrating
                  a custom ERP system into your day-to-day business operations.
                </p>
              </div>
            </div>

            <div className='p-4 w-full xl:w-1/4 md:w-1/2'>
              <div className='bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] p-2 mb-6'></div>
              <div className='cursor-pointer min-h-60'>
                <h2 className='text-4xl font-bold mb-4'>
                  <span className='text-[#6A4A94]'>Management &</span>
                  <br />
                  <span className='dark:text-white'>staff buy-in</span>
                </h2>
                <p className='text-base leading-relaxed text-justify dark:text-white'>
                  Typically limited process changes aimed at better integrating
                  a custom ERP system into your day-to-day business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPChangeManagement;
