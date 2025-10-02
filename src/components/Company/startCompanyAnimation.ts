import createCompanyPinTimeline from "./createCompanyPinTimeline";
import createCompanyZoomTimeline from "./createCompanyZoomTimeline";

/**
 * companyセクション用のアニメーションのTimelineをまとめて生成し、実行する。
 */
const startCompanyAnimation = (): void => {
  //順序が重要なので注意！（zoom → pinの順）
  createCompanyZoomTimeline();
  createCompanyPinTimeline();
};

export default startCompanyAnimation;
