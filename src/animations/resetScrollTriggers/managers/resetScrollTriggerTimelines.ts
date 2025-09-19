import bottomScrollTriggerTimeline from "@/animations/resetScrollTriggers/bottomScrollTriggerTimeline";
import companyScrollTriggerPinTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerPinTimeline";
import companyScrollTriggerZoomTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerZoomTimeline";
import headerScrollTriggerTimeline from "@/animations/resetScrollTriggers/headerScrollTriggerTimeline";
import sectionTitleScrollTriggerTimeline from "@/animations/resetScrollTriggers/sctionTitleScrollTriggerTimeline";
import serviceScrollTriggerTimeline from "@/animations/resetScrollTriggers/serviceScrollTriggerTimeline";
import worksScrollTriggerTimeline from "@/animations/resetScrollTriggers/worksScrollTriggerTimeline";
import {
  addResetTimelineCreators,
  createAllScrollTimelines,
} from "./manageScrollTriggers";

//下記の配列内の各関数は「必ずGSAPTimeline配列（または空配列）を返す」仕様とする。
//→ 管理側で一括展開・登録できるようにするため。
const scrollTimelineCreators = [
  bottomScrollTriggerTimeline,
  companyScrollTriggerPinTimeline,
  companyScrollTriggerZoomTimeline,
  headerScrollTriggerTimeline,
  sectionTitleScrollTriggerTimeline,
  serviceScrollTriggerTimeline,
  worksScrollTriggerTimeline,
];

//上記の配列を展開し、対象の各関数を登録
scrollTimelineCreators.forEach(addResetTimelineCreators);

/**
 * @description scrollTimelineCreatorsに登録された関数をすべて実行し、Timelineを一括再生成する。
 */
const resetScrollTriggerTimelines = () => {
  createAllScrollTimelines();
};

export default resetScrollTriggerTimelines;
