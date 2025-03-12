import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ServiceComponents from "@/Components/Service/ServiceComponents";

export default function index() {
  return (
    <div className=' dark:bg-gray-950'>
      <Header />
      <ServiceComponents />
      <Footer />
    </div>
  );
}
