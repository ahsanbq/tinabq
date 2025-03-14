import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PortfolioProject from "@/Components/Portfolio/PortfolioProject";
import { client } from "@/tina/__generated__/databaseClient";
import InsightHero from "@/Components/Insight/InsightHero";
export default function Portfolio(props) {
  return (
    <div className='dark:bg-white overflow-hidden'>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden mt-12">
        <InsightHero/>
        </div>
        <PortfolioProject {...props} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const portfolioResponse = await client.queries.portfolioConnection();

  return {
    props: {
      data: portfolioResponse.data,
      query: portfolioResponse.query,
    },
  };
};
