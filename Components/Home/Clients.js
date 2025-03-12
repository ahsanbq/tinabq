// import useWindowSize from "@/hooks/useWindowSize";
export default function Clients() {
  // let size = useWindowSize();
  const clients = [
    { src: "/images/home/clients/logo-1.png", alt: "Logo 1" },
    { src: "/images/home/clients/logo-2.png", alt: "Logo 2" },
    { src: "/images/home/clients/logo-4.png", alt: "Logo 4" },
    { src: "/images/home/clients/logo-5.png", alt: "Logo 5" },
    { src: "/images/home/clients/logo-6.png", alt: "Logo 6" },
    { src: "/images/home/clients/logo-7.png", alt: "Logo 7" },
    { src: "/images/home/clients/logo-8.png", alt: "Logo 8" },
    { src: "/images/home/clients/logo-9.png", alt: "Logo 9" },
    { src: "/images/home/clients/logo-10.png", alt: "Logo 10" },
    { src: "/images/home/clients/logo-3.png", alt: "Logo 3" },
    { src: "/images/home/clients/logo-11.png", alt: "Logo 11" },
    { src: "/images/home/clients/logo-12.png", alt: "Logo 12" },
  ];

  const clients2 = [
    { src: "/images/home/clients/logo-1.png", alt: "Logo 1" },
    { src: "/images/home/clients/logo-2.png", alt: "Logo 2" },
    { src: "/images/home/clients/logo-4.png", alt: "Logo 4" },
    { src: "/images/home/clients/logo-5.png", alt: "Logo 5" },
    { src: "/images/home/clients/logo-6.png", alt: "Logo 6" },
    { src: "/images/home/clients/logo-7.png", alt: "Logo 7" },
    { src: "/images/home/clients/logo-8.png", alt: "Logo 8" },
    { src: "/images/home/clients/logo-9.png", alt: "Logo 9" },
    { src: "/images/home/clients/logo-10.png", alt: "Logo 10" },
    { src: "/images/home/clients/logo-3.png", alt: "Logo 3" },
    { src: "/images/home/clients/logo-11.png", alt: "Logo 11" },
    { src: "/images/home/clients/logo-12.png", alt: "Logo 12" },
  ];

  return (
    <section
      id='clients'
      className='flex items-center justify-center w-full md:mt-24 md:mb-4 bg-center bg-no-repeat bg-cover md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'
    >
      <div
        className='w-full '
        // style={{
        //   backgroundImage: "url('/images/home/bg-subtract.svg')",
        // }}
      >
        <div className='mx-auto max-w-7xl text-center mt-20 md:mt-0'>
          {/* <h3 className='flex w-full text-[1.7rem] md:text-5xl font-bold text-gray-900 dark:text-white px-4 md:px-0 justify-center mb-5'>
            Our Client’s
          </h3> */}
          <p className='text-gray-600 text-center max-w-lg text-lg mx-auto my-5 px-5'>
            Trusted by 100+ companies around the world
          </p>
        </div>

        <div
        // style={{
        //   backgroundImage:
        //     size.width < 640
        //       ? "url('/images/home/mobile-bg.svg')"
        //       : undefined,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   backgroundSize: size.width < 640 ? "cover" : "container",
        // }}
        >
          <div className='logos  mx-auto '>
            {/* First logos-slide */}
            <div className='logos-slide '>
              {clients.map((client, index) => (
                <div className='mx-3' key={index}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    width='400'
                    height='400'
                    // key={index}
                    className='topLogo-1 p-2 px-1'
                  />
                </div>
              ))}
            </div>
            <div className='logos-slide '>
              {clients2.map((client, index) => (
                <div className='mx-3' key={index}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    width='400'
                    height='400'
                    // key={index}
                    className='topLogo-1 p-2 px-1'
                  />
                </div>
              ))}
            </div>

            {/* Duplicate the logos for continuous scrolling */}
            {/* <div className='logos-slide-1 hidden md:flex'>
              {clients.map((client, index) => (
                <div className='mx-4' key={index}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    width='400'
                    height='400'
                    // key={index}
                    className='topLogo-1 p-2 px-4'
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
