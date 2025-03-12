import InsightBlog from "./InsightBlog";
import InsightHero from "./InsightHero";

export default function InsightComponents() {
  return (
    <div className="container mx-auto p-12 max-w-7xl ">
      
      <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
      <InsightHero />
      </div>
      <InsightBlog />
    </div>
  );
}
