import createCompanyPinTimeline from "./createCompanyPinTimeline";
import createCompanyZoomTimeline from "./createCompanyZoomTimeline";

/**
 * companyセクション用のアニメーションのTimelineをまとめて生成し、実行する。
 */
const startCompanyAnimation = (): void => {
  createCompanyPinTimeline();
  createCompanyZoomTimeline();
};

export default startCompanyAnimation;
