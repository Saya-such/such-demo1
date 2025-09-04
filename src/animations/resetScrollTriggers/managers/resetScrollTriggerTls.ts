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
  //下記の各関数は必ず配列(GSAPTimelineが値として格納されている、もしくは空配列)を戻り値にする
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
    //対象の関数を登録
    addScrollTriggerFns(fn);
  });

  //配列を展開して値である各timelineを(再)生成
  runAllScrollTriggers();
};

export default resetScrollTriggerTls;
