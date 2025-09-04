import {
  addScrollTriggerFns,
  runAllScrollTriggers,
} from "./initScrollTriggerManager";
import headerScrollTriggerAnimation from "@/animations/resetScrollTriggers/headerScrollTriggerAnimation";
import sectionTitleScrollTriggerAnimation from "@/animations/resetScrollTriggers/sctionTitleScrollTriggerAnimation";
import worksScrollTriggerAnimation from "@/animations/resetScrollTriggers/worksScrollTriggerAnimation";
import serviceScrollTriggerAnimation from "@/animations/resetScrollTriggers/serviceScrollTriggerAnimation";
import companyScrollTriggerZoomAnimation from "@/animations/resetScrollTriggers/companyScrollTriggerZoomAnimation";
import companyScrollTriggerPinAnimation from "@/animations/resetScrollTriggers/companyScrollTriggerPinAnimation";
import bottomScrollTriggerAnimation from "@/animations/resetScrollTriggers/bottomScrollTriggerAnimation";

const scrollTriggerFns = [
  headerScrollTriggerAnimation,
  sectionTitleScrollTriggerAnimation,
  worksScrollTriggerAnimation,
  serviceScrollTriggerAnimation,
  companyScrollTriggerZoomAnimation,
  companyScrollTriggerPinAnimation,
  bottomScrollTriggerAnimation,
];

const resetScrollTriggerTls = () => {
  scrollTriggerFns.forEach((fn) => {
    addScrollTriggerFns(fn);
  });

  runAllScrollTriggers();
};

export default resetScrollTriggerTls;
