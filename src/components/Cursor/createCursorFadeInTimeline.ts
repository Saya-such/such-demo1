import { gsap } from "gsap";

/**
 * @description カーソル用要素cursorの位置を現在のマウス位置に合わせた上でフェードインアニメーションを実行する。
 * - DOM要素の取得やイベントリスナー登録は行わない。
 *
 * @param {HTMLElement} cursor - カーソル用のDOM要素
 * @param {MouseEvent} e - mouseenterイベント
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createCursorFadeInTimeline = (
  cursor: HTMLElement,
  e: MouseEvent,
): GSAPTimeline => {
  const tl = gsap.timeline();

  tl.set(cursor, { scale: 0, opacity: 0 }).fromTo(
    cursor,
    {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
    },
    {
      scale: 1,
      opacity: 0.8,
      duration: 0.3,
      ease: "power1.in",
    },
  );

  return tl;
};

export default createCursorFadeInTimeline;
