import Image from "next/image";

const ServiceOffer = () => {
  return (
    <section
      id='erp'
      className='flex w-full mt-24 mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height px-4 sm:px-4 xl:px-0'
    >
      <div className='container flex flex-col items-center px-1 py-4 mx-auto md:flex-row'>
        <div className='w-full'>
          <h1 className='flex items-center justify-center text-center w-full mb-16 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>
            Odoo Services We Offer
          </h1>
          <div className='flex flex-wrap'>
            {erpData.map((item, index) => (
              <div key={index} className='p-2 w-full xl:w-1/4 md:w-1/2 group'>
                <div
                  className={`bg-service border border-[#E8E8E8] group-hover:text-white cursor-pointer p-6 min-h-60`}
                >
                  <div
                    className={`w-14 h-14 p-2 rounded-full bg-[#9D4F911F] group-hover:bg-white`}
                  >
                    <div className='relative w-10 h-10 mb-4 overflow-hidden'>
                      {/* Default Image */}
                      <Image
                        src={item.defaultIcon}
                        alt='Default Image'
                        width={40}
                        height={40}
                        className='w-full h-full duration-500 scale-100 transition-opacity group-hover:opacity-0'
                      />
                      {/* Hover Image */}
                      <Image
                        src={item.defaultIcon}
                        alt='Hover Image'
                        width={40}
                        height={40}
                        className='absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-75'
                      />
                    </div>
                  </div>
                  <h2 className='text-2xl !leading-normal font-medium mb-2'>
                    {item.title}
                  </h2>
                  <p className='text-base leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const erpData = [
  {
    // bgColor: "[#FBECF2]",
    // hoverBgColor: "[#EC008C]",
    iconBgColor: "[#EC008C]",
    hoverIconBgColor: "[#FBECF2]",
    defaultIcon: "/images/service/Implementation.svg",
    // hoverIcon: "/images/service/Implementation.svg",
    title: "Implementation",
    description: "Requirements Research Project Planning Solution Design",
  },
  {
    // bgColor: "[#ECF8FD]",
    // hoverBgColor: "[#45BDE8]",
    iconBgColor: "[#45BDE8]",
    hoverIconBgColor: "[#ECF8FD]",
    defaultIcon: "/images/service/customization.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-02.svg",
    title: "Customization",
    description: "Requirements Research Project Planning Solution Design",
  },
  {
    // bgColor: "[#F5F9EE]",
    // hoverBgColor: "[#97C253]",
    iconBgColor: "[#97C253]",
    hoverIconBgColor: "[#F5F9EE]",
    defaultIcon: "/images/service/development.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-03.svg",
    title: "Development",
    description: "Requirements  Research Project Planning Solution Design",
  },
  {
    // bgColor: "[#FFF9F3]",
    // hoverBgColor: "[#FDC688]",
    iconBgColor: "[#FDC688]",
    hoverIconBgColor: "[#FFF9F3]",
    defaultIcon: "/images/service/integration.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-04.svg",
    title: "Integration",
    description: "Requirements Research Project Planning Solution Design",
  },

  {
    // bgColor: "[#FBECF2]",
    // hoverBgColor: "[#EC008C]",
    iconBgColor: "[#EC008C]",
    hoverIconBgColor: "[#FBECF2]",
    defaultIcon: "/images/service/Implementation.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-06.svg",
    title: "Implementation",
    description: "Requirements Research Project Planning Solution Design",
  },
  {
    // bgColor: "[#ECF8FD]",
    // hoverBgColor: "[#45BDE8]",
    iconBgColor: "[#45BDE8]",
    hoverIconBgColor: "[#ECF8FD]",
    defaultIcon: "/images/service/trainning.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-07.svg",
    title: "Training",
    description: "Requirements  Research Project Planning Solution Design",
  },
  {
    bgColor: "[#F5F9EE]",
    hoverBgColor: "[#FDC688]",
    iconBgColor: "[#FDC688]",
    hoverIconBgColor: "[#F5F9EE]",
    defaultIcon: "/images/service/migration.svg",
    // hoverIcon: "/images/icon/icon-pro-erp-hr-08.svg",
    title: "Migration",
    description: "Requirements Research Project Planning Solution Design",
  },
  {
    // bgColor: "[#F0EDF4]",
    // hoverBgColor: "[#6A4A94]",
    iconBgColor: "[#6A4A94]",
    hoverIconBgColor: "[#F0EDF4]",
    defaultIcon: "/images/service/support.svg",
    // hoverIcon: "/images/service/support.svg",
    title: "Support",
    description: "Requirements  Research Project Planning Solution Design",
  },
];

export default ServiceOffer;
