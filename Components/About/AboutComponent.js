import AboutHero from "./AboutHero"
import OurMotto from "./OurMotto";
import OurMissionVision from "./OurMission";
import OurValues from "./OurValues";

function AboutComponent() {
  return (
    <div className="container mx-auto  max-w-7xl ">
   
      <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <AboutHero />
      </div>
      <OurMotto />
   
 
   
      <div className='w-screen max-w-7xl '>
      <OurMissionVision/>
 
      </div>
      <OurValues/>

    </div>
  );
}
export default AboutComponent;
