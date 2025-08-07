import {
  addCreateScrollTriggerTlFns,
  runAllScrollTriggerTls,
} from "./scrollTriggerTlsManager";
import enableGalleryScroll from "@/components/Works/enableGalleryScroll";
import startItemAnimation from "@/components/Service/startItemAnimation";

const resetScrollTriggerTls = () => {
  addCreateScrollTriggerTlFns(enableGalleryScroll);
  addCreateScrollTriggerTlFns(startItemAnimation);

  runAllScrollTriggerTls();
};

export default resetScrollTriggerTls;
