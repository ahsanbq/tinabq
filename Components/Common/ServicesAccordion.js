import { useState } from "react";

const ServiceAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <section
      id='faq'
      className='flex w-full md:mt-24 mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 sm:px-4 xl:px-0'
    >
      <div className='container flex flex-col items-center px-1 py-4 mx-auto md:flex-row'>
        <div className='w-full'>
          <h1 className='flex items-center justify-center text-center w-full mb-16 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>
            Our ERP Module
          </h1>
          <div className='flex flex-wrap gap-2 max-w-5xl mx-auto'>
            {/* Accordion Item 1 */}
            <div className='w-full border border-gray-200'>
              <button
                className={`w-full text-left py-2 px-4 font-medium text-lg hover:text-white dark:text-white focus:text-white focus:bg-pink-600 hover:bg-pink-600 flex justify-between items-center ${
                  activeAccordion === 1 ? "bg-pink-600 text-white" : ""
                }`}
                onClick={() => toggleAccordion(1)}
              >
                Office Organizer
                <span className='transition-transform duration-300 font-medium text-2xl'>
                  {activeAccordion === 1 ? "-" : "+"}
                </span>
              </button>
              <div className={`p-4 ${activeAccordion === 1 ? "" : "hidden"}`}>
                <p className='text-gray-600 dark:text-white'>
                  Enterprise resource planning (ERP) systems are the backbone of
                  many organizations, helping them manage their accounting,
                  procurement processes, projects, and more throughout the
                  enterprise...
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className='w-full border border-gray-200'>
              <button
                className={`w-full text-left py-2 px-4 font-medium text-lg hover:text-white dark:text-white focus:text-white focus:bg-pink-600 hover:bg-pink-600 flex justify-between items-center ${
                  activeAccordion === 2 ? "bg-pink-600 text-white" : ""
                }`}
                onClick={() => toggleAccordion(2)}
              >
                Human Capital Management
                <span className='transition-transform duration-300 font-medium text-2xl'>
                  {activeAccordion === 2 ? "-" : "+"}
                </span>
              </button>
              <div className={`p-4 ${activeAccordion === 2 ? "" : "hidden"}`}>
                <p className='text-gray-600 dark:text-white'>
                  Cloud ERP solutions are mature offerings that have all the
                  same features and functionality as their on-premises
                  counterparts...
                </p>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className='w-full border border-gray-200'>
              <button
                className={`w-full text-left py-2 px-4 font-medium text-lg hover:text-white dark:text-white  focus:text-white focus:bg-pink-600 hover:bg-pink-600 flex justify-between items-center ${
                  activeAccordion === 3 ? "bg-pink-600 text-white" : ""
                }`}
                onClick={() => toggleAccordion(3)}
              >
                Account & Financial Management
                <span className='transition-transform duration-300 font-medium text-2xl'>
                  {activeAccordion === 3 ? "-" : "+"}
                </span>
              </button>
              <div className={`p-4 ${activeAccordion === 3 ? "" : "hidden"}`}>
                <p className='text-gray-600 dark:text-white'>
                  Software as a Service (SaaS) allows users to subscribe to and
                  use application software in the cloud rather than having to
                  buy the hardware or license the software...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;
