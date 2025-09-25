import companyScrollTriggerPinTimeline from "./companyScrollTriggerPinTimeline";
import companyScrollTriggerZoomTimeline from "./companyScrollTriggerZoomTimeline";

/**
 * companyセクション用のアニメーションのTimelineをまとめて生成し、配列として返す。
 * - PIN アニメーションの依存関係があるため、生成順序をここで固定する。
 * - resetScrollTriggerTimelinesによって一括再生成される。
 */
const companyScrollTriggerTimeline = (): GSAPTimeline[] => {
  let timelines: GSAPTimeline[] = [];

  //順序が重要なので注意！（zoom → pinの順）
  const zoomTl = companyScrollTriggerZoomTimeline();
  if (zoomTl) timelines.push(zoomTl);

  const pinTl = companyScrollTriggerPinTimeline();
  if (pinTl) timelines.push(pinTl);

  return timelines;
};

export default companyScrollTriggerTimeline;
