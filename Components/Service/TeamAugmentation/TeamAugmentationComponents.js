import AugmentationHero from "./AugmentationHero";
import Benefits from "./Benefits";
import StaffAugmentation from "./StaffAugmentation";
import StaffAugmentationInfo from "./StaffAugmentationInfo";
import TechStack from "./TechStack";
import WhyUse from "./WhyUse";

export default function TeamAugmentationComponents() {
  return (
    <div>
      <AugmentationHero />
      <StaffAugmentationInfo />
      <Benefits />
      <WhyUse />
      <StaffAugmentation />
      <TechStack />
    </div>
  );
}
