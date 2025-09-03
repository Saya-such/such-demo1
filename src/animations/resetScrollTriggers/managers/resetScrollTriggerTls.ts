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

const resetScrollTriggerTls = () => {
  addScrollTriggerFns(headerScrollTriggerAnimation);
  const arry = sectionTitleScrollTriggerAnimation();
  arry?.forEach((fn) => addScrollTriggerFns(fn));
  addScrollTriggerFns(worksScrollTriggerAnimation);
  addScrollTriggerFns(serviceScrollTriggerAnimation);
  addScrollTriggerFns(companyScrollTriggerZoomAnimation);
  addScrollTriggerFns(companyScrollTriggerPinAnimation);
  addScrollTriggerFns(bottomScrollTriggerAnimation);

  runAllScrollTriggers();
};

export default resetScrollTriggerTls;
