import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import PortfolioDetailsView from "@/Components/Portfolio/Details/PortfolioDetailsView";

export default function details() {
  return (
    <div className=' dark:bg-gray-950'>
      <Header />
      <main className='mx-auto max-w-7xl'></main>
      <PortfolioDetailsView />
      <Footer />
    </div>
  );
}
