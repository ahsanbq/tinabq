import PortfolioDetails from "./PortfolioDetails";
import PortfolioHero from "./PortfolioHero";

export default function PortfolioDetailsView() {
  return (
    <div className='bg-white max-w-7xl mx-auto'>
      <PortfolioHero />
      <PortfolioDetails />
    </div>
  );
}
