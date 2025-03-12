// import Image from "next/image";
// import Link from "next/link";
// const Services = () => {
//   return (
//     <section
//       id='services'
//       className='w-full md:mt-24 mb-4 text-gray-400 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height md:px-0'
//     >
//       <div className='container mx-auto'>
//         <div className='flex flex-col flex-wrap items-center w-full md:mb-20 mb-4 text-center px-4 md:px-0'>
//           <h3 className='w-full text-3xl md:text-5xl font-bold text-gray-900   mb-5'>
//             <span className='bg-clip-text'>Our Collaboration Model</span>
//           </h3>
//           <p className='text-gray-600 text-center max-w-lg text-sm'>
//             Creating Transformative Partnerships: A Model for Collaborative
//             Growth, Innovation, and Sustainable Success
//           </p>
//         </div>
//         <div className='flex flex-wrap justify-center'>
//           {servicesData.map((service, index) => {
//             // Determine the column-specific class
//             const columnClass =
//               index % 3 === 0
//                 ? "xl:ps-0" // First column
//                 : index % 3 === 1
//                 ? "xl:px-3" // Middle column
//                 : "xl:pe-0"; // Last column

//             return (
//               <div
//                 className={`p-4 xl:w-1/3 md:w-1/2 group ${columnClass}`}
//                 key={index}
//               >
//                 <div
//                   style={{
//                     backgroundImage: `url(${service?.bgImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     aspectRatio: "7/4", // Set the desired aspect ratio here
//                   }}
//                   className={`cursor-pointer p-7 ${service.textColor} flex flex-col items-start justify-center relative overflow-hidden`}
//                 >
//                   <div className='flex items-start mb-4 justify-center'>
//                     <div className='relative w-10 h-10 mr-4 overflow-hidden'>
//                       <Image
//                         src={service.hoverImage}
//                         className='w-full h-full transition-opacity duration-500'
//                         alt='Service Icon'
//                         width={40}
//                         height={40}
//                       />
//                     </div>
//                     <h3
//                       className={`sm:text-2xl text-2xl font-medium ${service.textColor}`}
//                     >
//                       {service.title}
//                     </h3>
//                   </div>
//                   <p
//                     className={`text-sm pe-20 flex items-start leading-relaxed ${service.textColor}`}
//                   >
//                     {service.description}
//                   </p>

//                   {/* Circular Image with Animation */}
               
//                   <div className='absolute bottom-1 right-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[30deg]'>
//                     <Link href='/service'>
//                     <Image
//                       src={service?.linkImage} // Replace with your circular image path
//                       alt='Circular Image'
//                       width={100} // Adjust size as needed
//                       height={100} // Adjust size as needed
//                       className='rounded-full' // Ensures the image is circular
//                     />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// const servicesData = [
//   {
//     title: "Team Augmentation",
//     description:
//       "Expanding teams with skilled professionals to enhance productivity and expertise.",
//     hoverImage: "/images/service/service-1.svg",
//     bgColor: "#ec008c",
//     textColor: "text-white",
//     bgImage: "/images/service/bg-1.svg",
//     linkImage: "/images/service/link-1.svg",
//   },
//   {
//     title: "Product Design",
//     description:
//       "Creating innovative solutions that meet user needs and enhance functionality.",
//     hoverImage: "/images/service/service-2.svg",
//     bgColor: "#ecf8fd",
//     textColor: "text-black",
//     bgImage: "/images/service/bg-2.svg",
//     linkImage: "/images/service/link-2.svg",
//   },
//   {
//     title: "MVP Development",
//     description:
//       "Building essential features to test ideas and validate market potential.",
//     hoverImage: "/images/service/service-3.svg",
//     bgColor: "#fff9f3",
//     textColor: "text-black",
//     bgImage: "/images/service/bg-3.svg",
//     linkImage: "/images/service/link-3.svg",
//   },
//   {
//     title: "Offshore Development",
//     description:
//       "Leveraging global talent to reduce costs and enhance project efficiency.",
//     hoverImage: "/images/service/service-4.svg",
//     bgColor: "#f5f9ee",
//     textColor: "text-black",
//     bgImage: "/images/service/bg-4.svg",
//     linkImage: "/images/service/link-4.svg",
//   },
//   {
//     title: "Software Development",
//     description:
//       "Designing and building software solutions to meet user needs efficiently.",
//     hoverImage: "/images/service/service-5.svg",
//     bgColor: "#f0edf4",
//     textColor: "text-black",
//     bgImage: "/images/service/bg-5.svg",
//     linkImage: "/images/service/link-5.svg",
//   },
//   {
//     title: "Odoo Implementation",
//     description:
//       "Integrating Odoo to streamline business processes and enhance operational efficiency.",
//     hoverImage: "/images/service/service-6.svg",
//     bgColor: "#f5f9ee",
//     textColor: "text-black",
//     bgImage: "/images/service/bg-6.svg",
//     linkImage: "/images/service/link-6.svg",
//   },
// ];

// export default Services;
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section
      id='services'
      className='w-full md:mt-24 mb-4 text-gray-400 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height md:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col flex-wrap items-center w-full md:mb-20 mb-4 text-center px-4 md:px-0'>
          <h3 className='w-full text-3xl md:text-5xl font-bold text-gray-900 mb-5'>
            <span className='bg-clip-text'>Our Collaboration Model</span>
          </h3>
          <p className='text-gray-600 text-center max-w-lg text-sm'>
            Creating Transformative Partnerships: A Model for Collaborative
            Growth, Innovation, and Sustainable Success
          </p>
        </div>
        <div className='flex flex-wrap justify-center'>
          {servicesData.map((service, index) => {
            // Determine the column-specific class
            const columnClass =
              index % 3 === 0
                ? "xl:ps-0" // First column
                : index % 3 === 1
                ? "xl:px-3" // Middle column
                : "xl:pe-0"; // Last column

            return (
              <div
                className={`p-4 xl:w-1/3 md:w-1/2 group ${columnClass}`}
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url(${service?.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    aspectRatio: "7/4", // Set the desired aspect ratio here
                  }}
                  className={`cursor-pointer p-7 ${service.textColor} flex flex-col items-start justify-center relative overflow-hidden`}
                >
                  <div className='flex items-start mb-4 justify-center'>
                    <div className='relative w-10 h-10 mr-4 overflow-hidden'>
                      <Image
                        src={service.hoverImage}
                        className='w-full h-full transition-opacity duration-500'
                        alt='Service Icon'
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className={`sm:text-2xl text-2xl font-medium ${service.textColor}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-sm pe-20 flex items-start leading-relaxed ${service.textColor}`}>
                    {service.description}
                  </p>

                  {/* Circular Image with Animation */}
                  <div className='absolute bottom-1 right-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[30deg]'>
                    <Link href={service.nav}>
                      <Image
                        src={service?.linkImage} // Replace with your circular image path
                        alt='Circular Image'
                        width={100} // Adjust size as needed
                        height={100} // Adjust size as needed
                        className='rounded-full' // Ensures the image is circular
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    title: "Team Augmentation",
    description:
      "Expanding teams with skilled professionals to enhance productivity and expertise.",
    hoverImage: "/images/service/service-1.svg",
    bgColor: "#ec008c",
    textColor: "text-white",
    bgImage: "/images/service/bg-1.svg",
    linkImage: "/images/service/link-1.svg",
    nav: "/service/teamaugmentation", // Add navigation path
  },
  {
    title: "Product Design",
    description:
      "Creating innovative solutions that meet user needs and enhance functionality.",
    hoverImage: "/images/service/service-2.svg",
    bgColor: "#ecf8fd",
    textColor: "text-black",
    bgImage: "/images/service/bg-2.svg",
    linkImage: "/images/service/link-2.svg",
    nav: "/service/productdesign", // Add navigation path
  },
  {
    title: "MVP Development",
    description:
      "Building essential features to test ideas and validate market potential.",
    hoverImage: "/images/service/service-3.svg",
    bgColor: "#fff9f3",
    textColor: "text-black",
    bgImage: "/images/service/bg-3.svg",
    linkImage: "/images/service/link-3.svg",
    nav: "/service/mvpdevelopment", // Add navigation path
  },
  {
    title: "Offshore Development",
    description:
      "Leveraging global talent to reduce costs and enhance project efficiency.",
    hoverImage: "/images/service/service-4.svg",
    bgColor: "#f5f9ee",
    textColor: "text-black",
    bgImage: "/images/service/bg-4.svg",
    linkImage: "/images/service/link-4.svg",
    nav: "/service/offshoredevelopment", // Add navigation path
  },
  {
    title: "Software Development",
    description:
      "Designing and building software solutions to meet user needs efficiently.",
    hoverImage: "/images/service/service-5.svg",
    bgColor: "#f0edf4",
    textColor: "text-black",
    bgImage: "/images/service/bg-5.svg",
    linkImage: "/images/service/link-5.svg",
    nav: "/service/softwaredevelopment", // Add navigation path
  },
  {
    title: "Odoo Implementation",
    description:
      "Integrating Odoo to streamline business processes and enhance operational efficiency.",
    hoverImage: "/images/service/service-6.svg",
    bgColor: "#f5f9ee",
    textColor: "text-black",
    bgImage: "/images/service/bg-6.svg",
    linkImage: "/images/service/link-6.svg",
    nav: "/service/oodoimplementation", // Add navigation path
  },
];

export default Services;
