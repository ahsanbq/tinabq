import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import SupplyChainComponents from "@/Components/Products/SupplyChainManagement/SupplyChainComponents";

function supplychain() {
  return (
    <div className=' dark:bg-white'>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <SupplyChainComponents />
      </main>

      <Footer />
    </div>
  );
}

export default supplychain;
