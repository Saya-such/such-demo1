/**
 * @description 渡されたtlに対してselectorへのフリップアニメーションを追加し更新したTimelineを返す。
 * DOM要素の取得は行わない。
 *
 * @param {HTMLElement} selector - フリップアニメーション対象のDOM要素
 * @param {GSAPTimeline} tl - アニメーションを追加するGSAPTimelineインスタンス
 *
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 *
 * @remarks
 * - Timelineは事前に作成されたものを渡すこと
 */
const createPageFlipTimeline = (
  selector: HTMLElement,
  tl: GSAPTimeline,
): GSAPTimeline => {
  tl.set(selector, {
    scale: 2,
    aspectRatio: "1/cos(30deg)",
    clipPath: "polygon(0 0, 100% 0, 0 100%)",
  }).to(selector, {
    xPercent: -100,
    yPercent: -100,
    duration: 0.7,
    ease: "power3.in",
  });

  return tl;
};

export default createPageFlipTimeline;
