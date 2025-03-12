
// import Image from "next/image";

// function SupplyChainHero() {
//   return (
//     <section
//       id="supplychain-hero"
//       className="relative flex flex-col items-center justify-center py-16 mb-12   md:flex-row body-font scroll-mt-40  bg-gradient-to-r from-[rgba(1,126,132,0.0988)] via-[rgba(166,45,130,0.0988)] to-[rgba(156,87,137,0.0304)]  "
//     >
//       <div className="container flex flex-col md:flex-row items-center justify-between gap-12 bg-no-repeat py-8 px-20 ">
     
//         <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
//           <h1 className="mb-6 text-3xl uppercase font-semibold title-font sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-500">
//             Supply Chain
//             <br />
//             Management <span className="text-blue-500">(SCM)</span>
//           </h1>

         
//           <button className="px-6 py-2 text-lg text-white rounded bg-pink-700 hover:bg-purple-900">
//             Hire The Best Team →
//           </button>
//         </div>

     
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <div className="w-full md:w-full bg-white/20 border-2 border-white shadow-md rounded-md py-8 px-6 relative">
//           <div className="flex flex-col ">

//   <div className="w-[120px] h-[120px] flex flex-col items-center justify-center bg-white/20 border-2 border-white shadow-md rounded-md">
  
//   <div className="flex flex-col items-center justify-center gap-1">
//     <img 
//       src="/images/product/Supply Chain Management/12+star.svg" 
//       alt="12+ Star" 
//       className="w-[40px] h-[40px]"
//     />
//     <div className="text-[#EC008C] text-[36px] font-bold">12+</div>
//   </div>
// </div>



//   <p className="text-[#484949] text-[16px] leading-[19px] text-left w-full mt-4">
//     Years of Experience. Our complete software packages have no complication. It's not just user-friendly, but also high-performance ERP software that makes the control of Human Resources a dream. Choose the best ERP SOFTWARE IN BANGLADESH for your Company/Organization/Institution/Business.
//   </p>

 
//   <button className="mt-4 px-4 py-2 bg-[#8DC63F] text-white font-semibold text-[15px] rounded-md w-fit">
//     Get a demo
//   </button>
// </div>


            
//             <Image
//               src="/images/product/Supply Chain Management/celebration.png"
//               alt="Celebration"
//               width={90}
//               height={90}
//               className="absolute top-[-50px] right-[200px] scale-x-[-1]"
//             />
//             <Image
//               src="/images/product/Supply Chain Management/cup.png"
//               alt="Trophy"
//               width={60}
//               height={100}
//               className="absolute bottom-[-40px] right-[10px] scale-x-[-1]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SupplyChainHero;
import Image from "next/image";

function SupplyChainHero() {
  return (
    <section
      id="supplychain-hero"
      className="relative flex flex-col items-center justify-center py-4  mt-8 mb-12 md:flex-row body-font scroll-mt-40 bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[rgba(156,87,137,0.0304)] to-[rgba(1,126,132,0.0988)]" // Reduced vertical padding
    >
      <div className="container mt-8 flex  flex-col md:flex-row items-center justify-between gap-6 bg-no-repeat py-12 px-20 max-w-7xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h1 className="mb-4 text-3xl uppercase font-semibold title-font sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-500"> {/* Reduced bottom margin */}
            Supply Chain
            <br />
            Management <span className="text-blue-500">(SCM)</span>
          </h1>
          <button className="px-6 py-2 text-lg text-white rounded bg-pink-700 hover:bg-purple-900">
            Hire The Best Team →
          </button>
        </div>

        <div className="w-full md:w-1/2 mb-12 flex justify-center md:justify-end">
          <div className="w-full md:w-[800px] bg-white/20 border-2 border-white shadow-md rounded-md py-4 px-4 relative"> {/* Card padding remains unchanged */}
            <div className="flex flex-col">
              <div className="w-[120px] h-[120px] flex flex-col items-center justify-center bg-white/20 border-2 border-white shadow-md rounded-md">
                <div className="flex flex-col items-center justify-center gap-1">
                  <img 
                    src="/images/product/Supply Chain Management/12+star.svg" 
                    alt="12+ Star" 
                    className="w-[40px] h-[40px]"
                  />
                  <div className="text-[#EC008C] text-[36px] font-bold">12+</div>
                </div>
              </div>

              <p className="text-[#484949] text-[16px] leading-[24px] text-left w-full mt-4">
                Years of Experience. Our complete software packages have no complication. It's not just user-friendly, but also high-performance ERP software that makes the control of Human Resources a dream. Choose the best ERP SOFTWARE IN BANGLADESH for your Company/Organization/Institution/Business.
              </p>

              <button className="mt-4 mb-8 px-4 py-2 bg-[#8DC63F] text-white font-semibold text-[15px] rounded-md w-fit">
                Get a demo
              </button>
            </div>

            <Image
              src="/images/product/Supply Chain Management/celebration.png"
              alt="Celebration"
              width={90}
              height={90}
              className="absolute top-[-50px] right-[200px] scale-x-[-1]"
            />
            <Image
              src="/images/product/Supply Chain Management/cup.png"
              alt="Trophy"
              width={60}
              height={100}
              className="absolute bottom-[-40px] right-[10px] scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupplyChainHero;
