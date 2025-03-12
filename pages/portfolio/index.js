// import Footer from "@/Components/Footer";
// import Header from "@/Components/Header";
// import PortfolioProject from "@/Components/Portfolio/PortfolioProject";
// import { client } from "@/tina/__generated__/client";
// import InsightHero from "@/Components/Insight/InsightHero";
// export default function Portfolio(props) {
//   return (
//     <div className='dark:bg-white overflow-hidden'>
//       <Header />
//       <main className='mx-auto max-w-7xl'>
//         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mt-12">
//         <InsightHero/>
//         </div>
//         <PortfolioProject {...props} />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const portfolioResponse = await client.queries.portfolioConnection();

//   return {
//     props: {
//       data: portfolioResponse.data,
//       query: portfolioResponse.query,
//     },
//   };
// };
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PortfolioProject from "@/Components/Portfolio/PortfolioProject";
import { client } from "@/tina/__generated__/client";
import InsightHero from "@/Components/Insight/InsightHero";

export default function Portfolio(props) {
  return (
    <div className="dark:bg-white overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mt-12">
          <InsightHero />
        </div>
        <PortfolioProject {...props} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  let portfolioResponse = { data: { portfolioConnection: { edges: [] } }, query: "" }; // Fallback data

  try {
    // Fetch data from TinaCMS API (replace with your actual TinaCMS client query)
    portfolioResponse = await client.queries.portfolioConnection();
  } catch (error) {
    console.error("Error fetching TinaCMS data:", error);
    // Fallback data will be used if TinaCMS fetch fails
  }

  return {
    props: {
      data: portfolioResponse.data,
      query: portfolioResponse.query,
    },
  };
};
