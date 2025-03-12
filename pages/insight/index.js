import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import InsightComponents from "@/Components/Insight/InsightComponents";

export default function index() {
  return (
    <div className='dark:bg-white overflow-hidden'>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <InsightComponents />
      </main>

      <Footer />
    </div>
  );
}
