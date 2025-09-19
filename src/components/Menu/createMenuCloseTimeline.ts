import { gsap } from "gsap";

/**
 * @description SPメニューを閉じる際のアニメーションのTimelineを生成する。
 * - DOM取得は行わない。
 *
 * @param {Object} params - アニメーション設定オブジェクト
 * @param {HTMLElement} params.flipEl - ページめくりアニメーション対象の背景のDOM要素
 * @param {HTMLElement} params.menuEl - SPメニュー用のDOM要素
 * @param {HTMLElement} params.buttonEl - メニューボタン用のDOM要素
 *
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createMenuCloseTimeline = ({
  flipEl,
  menuEl,
  buttonEl,
}: {
  flipEl: HTMLElement;
  menuEl: HTMLElement;
  buttonEl: HTMLElement;
}): GSAPTimeline => {
  const tl = gsap.timeline();

  tl.add(() => {
    //メニューの非表示
    menuEl.classList.add("invisible");
    menuEl.classList.remove("is-open", "visible");
  })
    //ページめくり風アニメーション
    .to(flipEl, {
      xPercent: 50,
      yPercent: -50,
      duration: 0.6,
      ease: "power4.in",
    })
    .add(() => {
      //メニューボタンのスタイリング変更
      buttonEl.classList.remove("is-open");
    });

  return tl;
};

export default createMenuCloseTimeline;
