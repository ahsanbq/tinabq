import ERPChangeManagement from "@/Components/Common/ERPChangeManagement";
import GetTheBestERP from "@/Components/Common/GetTheBestERP";

import ServiceAccordion from "@/Components/Common/ServicesAccordion";

import KeyFeatures from "./KeyFeatures";
import SupplyChainHero from "./SupplyChainhero";

function SupplyChainComponents() {
  return (
    <main className='mx-auto max-w-7xl'>
      {/* Full-width section */}
      <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <SupplyChainHero />
      </div>

      {/* Rest of the content inside max-w-7xl */}
      <div className='px-4'>
        <KeyFeatures />
        <ERPChangeManagement />
        <ServiceAccordion />
        <GetTheBestERP />
      </div>
    </main>
  );
}

export default SupplyChainComponents;
