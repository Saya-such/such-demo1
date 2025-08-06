import {
  addScrollTriggerTimeline,
  runAllScrollTriggerTimelines,
} from "@/libs/fnStore";
import enableGalleryScroll from "@/components/Works/enableGalleryScroll";
import startItemAnimation from "@/components/Service/startItemAnimation";

const resetScrollTriggers = () => {
  addScrollTriggerTimeline(enableGalleryScroll);
  addScrollTriggerTimeline(startItemAnimation);

  runAllScrollTriggerTimelines();
};

export default resetScrollTriggers;
