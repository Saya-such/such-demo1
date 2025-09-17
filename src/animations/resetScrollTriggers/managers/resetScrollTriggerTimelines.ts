import {
  addResetTimelineCreators,
  createAllScrollTimelines,
} from "./manageScrollTriggers";
import headerScrollTriggerTimeline from "@/animations/resetScrollTriggers/headerScrollTriggerTimeline";
import sectionTitleScrollTriggerTimeline from "@/animations/resetScrollTriggers/sctionTitleScrollTriggerTimeline";
import worksScrollTriggerTimeline from "@/animations/resetScrollTriggers/worksScrollTriggerTimeline";
import serviceScrollTriggerTimeline from "@/animations/resetScrollTriggers/serviceScrollTriggerTimeline";
import companyScrollTriggerZoomTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerZoomTimeline";
import companyScrollTriggerPinTimeline from "@/animations/resetScrollTriggers/companyScrollTriggerPinTimeline";
import bottomScrollTriggerTimeline from "@/animations/resetScrollTriggers/bottomScrollTriggerTimeline";

const scrollTimelineCreators = [
  //下記の各関数は必ず配列(GSAPTimelineが値として格納されている、もしくは空配列)を戻り値にする
  //→ 管理側で一括展開できるようにするため
  headerScrollTriggerTimeline,
  sectionTitleScrollTriggerTimeline,
  worksScrollTriggerTimeline,
  serviceScrollTriggerTimeline,
  companyScrollTriggerZoomTimeline,
  companyScrollTriggerPinTimeline,
  bottomScrollTriggerTimeline,
];

//対象の関数の戻り値を展開して登録
scrollTimelineCreators.forEach(addResetTimelineCreators);

const resetScrollTriggerTimelines = () => {
  //配列を展開して値である各timelineを(再)生成
  createAllScrollTimelines();
};

export default resetScrollTriggerTimelines;
