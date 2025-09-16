import {
  addResetTimelineCreators,
  createAllScrollTimelines,
} from "./initScrollTriggerManager";
import headerScrollTriggerTimeline from "@/animations/resetScrollTriggers/headerScrollTriggerTimeline";
import sectionTitleScrollTriggerTimeline from "@/animations/resetScrollTriggers/sctionTitleScrollTriggerTimeline";
import worksScrollTriggerTimeline from "@/animations/resetScrollTriggers/worksScrollTriggerTimeline";
import serviceScrollTriggerTimeline from "@/animations/resetScrollTriggers/serviceScrollTriggerTimeline";
import companyScrollTriggerZoomTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerZoomTimeline";
import companyScrollTriggerPinTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerPinTimeline";
import bottomScrollTriggerTimeline from "@/animations/resetScrollTriggers/bottomScrollTriggerTimeline";

const scrollTimelineCreators = [
  //下記の各関数は必ず配列(GSAPTimelineが値として格納されている、もしくは空配列)を戻り値にする
  headerScrollTriggerTimeline,
  sectionTitleScrollTriggerTimeline,
  worksScrollTriggerTimeline,
  serviceScrollTriggerTimeline,
  companyScrollTriggerZoomTimeline,
  companyScrollTriggerPinTimeline,
  bottomScrollTriggerTimeline,
];

const resetScrollTriggerTimelines = () => {
  scrollTimelineCreators.forEach((fn) => {
    //対象の関数を登録
    addResetTimelineCreators(fn);
  });

  //配列を展開して値である各timelineを(再)生成
  createAllScrollTimelines();
};

export default resetScrollTriggerTimelines;
