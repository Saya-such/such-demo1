import { gsap } from "gsap";

/**
 * @description カーソル用要素cursorのフェードアウトアニメーションを実行する。
 * - DOM要素の取得やイベントリスナー登録は行わない。
 *
 * @param {HTMLElement} cursor - カーソル用のDOM要素
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createCursorFadeOutTimeline = (cursor: HTMLElement): GSAPTimeline => {
  const tl = gsap.timeline();

  tl.fromTo(
    cursor,
    {
      scale: 1,
      opacity: 0.8,
    },
    {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    },
  );

  return tl;
};

export default createCursorFadeOutTimeline;
