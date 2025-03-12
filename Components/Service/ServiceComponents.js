import EngagementModel from "./EngagementModel";
import HelpYou from "./HelpYou";
import ProjectProcess from "./ProjectProcess";
import ServiceHero from "./ServiceHero";
import ServiceOffer from "./ServiceOffer";

export default function ServiceComponents() {
  return (
    <main className='dark:bg-gray-950 mx-auto max-w-7xl '>
      <ServiceHero />
      <ServiceOffer />
      <EngagementModel />
      <ProjectProcess />
      <HelpYou />
    </main>
  );
}
