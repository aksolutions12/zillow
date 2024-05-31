import RightImgDb from "./RightImgDb";
import img1 from "../../../../assets/images/zillow_video_sample.png";
import img2 from "../../../../assets/images/agent_locator_1.png";
import img3 from "../../../../assets/images/expandable_map_locator_sample.png";
import LeftImgDb from "./LeftImgDb";

export default function ExpandableAds() {
  return (
    <div className="flex flex-col items-center justify-center  py-20 bg-white dark:bg-zinc-900">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-4">
        Native Expandable Rich Media Ads
      </h1>
      <p className="text-center text-zinc-700 dark:text-zinc-300 text-base md:text-base">
        Increase engagement with Zillow customers utilizing our interactive
        lightbox expandable rich media integrations.
      </p>

      <RightImgDb
        title="Expandable Content Guide"
        button1Text="Download Spec Sheet"
        button1Link="#"
        button2Text="Video Demo"
        button2Link="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
        paragraph="Available for direct, programmatic, and local advertising campaigns."
      />

      <LeftImgDb
        title="Insurance Agent Locator Ad"
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img2}
        imageAlt="Maple Apartments"
        paragraph="Available for direct advertising campaigns."
      />

      <RightImgDb
        title="Expandable Map Locator"
        button1Text="Download Spec Sheet"
        button1Link="#"
        button2Text="Video Demo"
        button2Link="#"
        imageUrl={img3}
        imageAlt="Maple Apartments"
        paragraph="Available for direct, programmatic, and local advertising campaigns."
      />
    </div>
  );
}
