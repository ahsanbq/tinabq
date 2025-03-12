// import useWindowSize from "@/hooks/useWindowSize";
// import Image from "next/image";
// import { useState } from "react";
// import { PortfolioText } from "./PortfolioText";
// import { useTina } from "tinacms/dist/react";

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }

// const categories = [
//   "All",
//   "Product Design",
//   "Custom App",
//   "Website Development",
//   "ERP Management",
//   "Brand Design",
// ];

// export default function PortfolioProject({ data, query }) {
//   const size = useWindowSize();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const { data: tinaData } = useTina({
//     query,
//     data,
//     variables: {},
//   });

//   // Highlight function
//   const highlightText = (text, query) => {
//     if (!query) return text;
//     const regex = new RegExp(`(${query})`, "gi");
//     return text.replace(regex, "<span class='highlight'>$1</span>");
//   };

//   // Debounced search handler
//   const handleSearch = debounce((query) => setSearchQuery(query), 300);

//   // Filter projects based on category and search query
//   const projects = tinaData?.portfolioConnection?.edges?.map(edge => edge.node) || [];
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory =
//       selectedCategory === "All" || project.category === selectedCategory;
//     const matchesSearch = project.title
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className='py-12'>
//       {/* Header */}
//       <div className='text-center'>
//         <h2
//           className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text mb-5 md:my-5 mx-4 md:mx-0'
//           style={{
//             backgroundImage:
//               "linear-gradient(257.72deg, rgba(1, 126, 132, 0.76) -0.55%, rgba(165, 48, 131, 0.76) 63.47%, rgba(156, 87, 137, 0.76) 105.57%)",
//           }}
//         >
//           Some featured works
//         </h2>

//         <p className='mt-2 text-gray-600 mb-10 '>
//           Explore Our Portfolio of Success: Highlighted Projects That Showcase
//           Our Expertise and <br className='hidden md:inline-block' /> Commitment
//           to Innovation
//         </p>
//       </div>

//       {/* Search Bar and Category Buttons */}
//       <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-3 '>
//         {/* Search Bar */}
//         <div className='flex max-w-md bg-white rounded-full px-2 py-1 border'>
//           <input
//             type='text'
//             placeholder='Search work here...'
//             onChange={(e) => handleSearch(e.target.value)}
//             className='flex-grow bg-transparent outline-none text-gray-700 px-2'
//           />
//           <button className='text-white bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900 px-3 py-1 rounded-full text-sm'>
//             Search
//           </button>
//         </div>

//         {/* Category Buttons */}
//         <div className='flex flex-wrap justify-center gap-2 mt-3 md:mt-0 mx-3 md:mx-0 '>
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-3 py-1 bg-white text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-[#70499B] hover:via-[#A62D82] hover:to-[#CB1A71] hover:text-white transition-colors text-sm border ${
//                 selectedCategory === category
//                   ? "bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] text-white"
//                   : ""
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Projects */}
//       <div className='grid gap-8 mt-8 max-w-5xl mx-auto'>
//         {filteredProjects.map((project, index) => (
//           <div
//             key={index}
//             className={`mx-2 md:mx-0 relative flex flex-col md:flex-row ${
//               index % 2 === 0 ? "md:flex-row-reverse" : ""
//             } rounded-lg text-white overflow-hidden md:h-[526px] group`}
//           >
//             {/* Project Image */}
//             <div
//               className={`w-full md:w-3/5 mt-6 md:mt-0 ${
//                 index % 2 === 0 ? "flex justify-end" : ""
//               }`}
//             >
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={600}
//                 height={450}
//                 className='rounded-t-lg md:rounded-md shadow-lg object-cover md:h-full h-96'
//               />
//             </div>

//             {/* Project Details */}
//             <div
//               className={`w-full md:w-2/5 ${project.textColor} p-4 md:p-8 flex flex-col justify-center relative`}
//               style={{
//                 backgroundImage: `url(${project?.bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: size.width < 640 ? "bottom" : "center",
//               }}
//             >
//               {/* Project Category with Hover Animation */}
//               <PortfolioText
//                 text={project.category}
//                 index={index}
//                 initialColors={project.category_color}
//               />

//               <h4 className='text-xl md:text-2xl font-semibold md:mt-5'>
//                 {project.title}
//               </h4>
//               <p className='mt-2 md:mt-4 text-[0.9rem] md:text-sm md:text-base'>
//                 {project.description}
//               </p>
//               <button
//                 className={`mb-10 md:mb-0 mt-2 w-[31%] md:w-2/6 md:mt-4 inline-flex items-center justify-center text-center px-3 py-2 rounded-full ${project.buttonColor} text-white font-semibold text-sm`}
//               >
//                 Explore now
//               </button>

//               {/* Circular Link Image with Hover Animation */}
//               <div className='absolute bottom-2 right-2 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12'>
//                 <Image
//                   src={project.linkImage}
//                   alt='Circular Image'
//                   width={100}
//                   height={100}
//                   className='rounded-full shadow-lg'
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PortfolioText } from "./PortfolioText";
import { useTina } from "tinacms/dist/react";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const categories = [
  "All",
  "Product Design",
  "Custom App",
  "Website Development",
  "ERP Management",
  "Brand Design",
];

export default function PortfolioProject({ data, query }) {
  const size = useWindowSize();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [tinaData, setTinaData] = useState({ portfolioConnection: { edges: [] } }); // Fallback state for TinaCMS data

  useEffect(() => {
    // Fetch data from TinaCMS and set fallback data if it's not running
    const fetchData = async () => {
      try {
        const response = await useTina({
          query,
          data,
          variables: {},
        });
        setTinaData(response.data);
      } catch (error) {
        console.error("TinaCMS is not running. Using fallback data.", error);
      }
    };
    fetchData();
  }, [data, query]);

  // Highlight function
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<span class='highlight'>$1</span>");
  };

  // Debounced search handler
  const handleSearch = debounce((query) => setSearchQuery(query), 300);

  // Filter projects based on category and search query
  const projects = tinaData?.portfolioConnection?.edges?.map(edge => edge.node) || [];
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className='py-12'>
      {/* Header */}
      <div className='text-center'>
        <h2
          className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text mb-5 md:my-5 mx-4 md:mx-0'
          style={{
            backgroundImage:
              "linear-gradient(257.72deg, rgba(1, 126, 132, 0.76) -0.55%, rgba(165, 48, 131, 0.76) 63.47%, rgba(156, 87, 137, 0.76) 105.57%)",
          }}
        >
          Some featured works
        </h2>

        <p className='mt-2 text-gray-600 mb-10 '>
          Explore Our Portfolio of Success: Highlighted Projects That Showcase
          Our Expertise and <br className='hidden md:inline-block' /> Commitment
          to Innovation
        </p>
      </div>

      {/* Search Bar and Category Buttons */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-3 '>
        {/* Search Bar */}
        <div className='flex max-w-md bg-white rounded-full px-2 py-1 border'>
          <input
            type='text'
            placeholder='Search work here...'
            onChange={(e) => handleSearch(e.target.value)}
            className='flex-grow bg-transparent outline-none text-gray-700 px-2'
          />
          <button className='text-white bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900 px-3 py-1 rounded-full text-sm'>
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className='flex flex-wrap justify-center gap-2 mt-3 md:mt-0 mx-3 md:mx-0 '>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 bg-white text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-[#70499B] hover:via-[#A62D82] hover:to-[#CB1A71] hover:text-white transition-colors text-sm border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] text-white"
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className='grid gap-8 mt-8 max-w-5xl mx-auto'>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`mx-2 md:mx-0 relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } rounded-lg text-white overflow-hidden md:h-[526px] group`}
          >
            {/* Project Image */}
            <div
              className={`w-full md:w-3/5 mt-6 md:mt-0 ${
                index % 2 === 0 ? "flex justify-end" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={450}
                className='rounded-t-lg md:rounded-md shadow-lg object-cover md:h-full h-96'
              />
            </div>

            {/* Project Details */}
            <div
              className={`w-full md:w-2/5 ${project.textColor} p-4 md:p-8 flex flex-col justify-center relative`}
              style={{
                backgroundImage: `url(${project?.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: size.width < 640 ? "bottom" : "center",
              }}
            >
              {/* Project Category with Hover Animation */}
              <PortfolioText
                text={project.category}
                index={index}
                initialColors={project.category_color}
              />

              <h4 className='text-xl md:text-2xl font-semibold md:mt-5'>
                {project.title}
              </h4>
              <p className='mt-2 md:mt-4 text-[0.9rem] md:text-sm md:text-base'>
                {project.description}
              </p>
              <button
                className={`mb-10 md:mb-0 mt-2 w-[31%] md:w-2/6 md:mt-4 inline-flex items-center justify-center text-center px-3 py-2 rounded-full ${project.buttonColor} text-white font-semibold text-sm`}
              >
                Explore now
              </button>

              {/* Circular Link Image with Hover Animation */}
              <div className='absolute bottom-2 right-2 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12'>
                <Image
                  src={project.linkImage}
                  alt='Circular Image'
                  width={100}
                  height={100}
                  className='rounded-full shadow-lg'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
