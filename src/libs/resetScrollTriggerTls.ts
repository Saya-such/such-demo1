import {
  addCreateScrollTriggerTlFns,
  runAllScrollTriggerTls,
} from "./scrollTriggerTlsManager";
import enableGalleryScroll from "@/components/Works/enableGalleryScroll";
import startItemAnimation from "@/components/Service/startItemAnimation";
import startScrollZoomAnimation from "@/components/Company/startScrollZoomAnimation";

const resetScrollTriggerTls = () => {
  addCreateScrollTriggerTlFns(enableGalleryScroll);
  addCreateScrollTriggerTlFns(startItemAnimation);
  addCreateScrollTriggerTlFns(startScrollZoomAnimation);

  runAllScrollTriggerTls();
};

export default resetScrollTriggerTls;
