import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ERPChangeManagement from "@/Components/Common/ERPChangeManagement";
import ProductDescription from "@/Components/Products/ProductDescription";
import ProductHero from "@/Components/Products/ProductHero";
import ProductServices from "@/Components/Products/ProductServices";
import ProductValues from "@/Components/Products/ProductValues";
import GetTheBestERP from "@/Components/Common/GetTheBestERP";
export default function index() {
  return (
    <div className=' dark:bg-gray-950'>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <ProductHero />
        <ProductDescription />
        <ProductValues />
        <ERPChangeManagement />
        <ProductServices />
        <GetTheBestERP/>
      </main>

      <Footer />
    </div>
  );
}
