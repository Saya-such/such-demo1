import {
  addCreateScrollTriggerTlFns,
  runAllScrollTriggerTls,
} from "./scrollTriggerTlsManager";
import enableChangeWhite from "@/components/Header/enableChangeWhite";
import enableGalleryScroll from "@/components/Works/enableGalleryScroll";
import startItemAnimation from "@/components/Service/startItemAnimation";
import startScrollZoomAnimation from "@/components/Company/startScrollZoomAnimation";
import startScrollPinAnimation from "@/components/Company/startScrollPinAnimation";
import startImgAnimation from "@/components/Bottom/startImgAnimation";

const resetScrollTriggerTls = () => {
  addCreateScrollTriggerTlFns(enableChangeWhite);
  addCreateScrollTriggerTlFns(enableGalleryScroll);
  addCreateScrollTriggerTlFns(startItemAnimation);
  addCreateScrollTriggerTlFns(startScrollZoomAnimation);
  addCreateScrollTriggerTlFns(startScrollPinAnimation);
  addCreateScrollTriggerTlFns(startImgAnimation);

  runAllScrollTriggerTls();
};

export default resetScrollTriggerTls;
