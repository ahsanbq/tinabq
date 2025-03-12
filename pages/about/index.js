import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import AboutComponent from "@/Components/About/AboutComponent";
export default function Portfolio(props) {
  return (
    <div className='dark:bg-white overflow-hidden'>
      <Header />
      <main className='mx-auto max-w-7xl'>
      
        <AboutComponent/>
      </main>
      <Footer />
    </div>
  );
}


