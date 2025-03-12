import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import TeamAugmentationComponents from "@/Components/Service/TeamAugmentation/TeamAugmentationComponents";

export default function teamaugmentation() {
  return (
    <div className=' dark:bg-gray-950'>
      <Header />
      <main className='mx-auto max-w-7xl'>
        <TeamAugmentationComponents />
      </main>

      <Footer />
    </div>
  );
}
