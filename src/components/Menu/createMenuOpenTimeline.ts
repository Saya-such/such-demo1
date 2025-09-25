import { gsap } from "gsap";

/**
 * @description SPメニューが開く際のアニメーションのTimelineを生成する。
 * - DOM取得は行わない。
 *
 * @param {Object} params - アニメーション設定オブジェクト
 * @param {HTMLElement} params.flipEl - ページめくりアニメーション対象の背景のDOM要素
 * @param {HTMLElement} params.menuEl - SPメニュー用のDOM要素
 * @param {HTMLElement} params.buttonEl - メニューボタン用のDOM要素
 *
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createMenuOpenTimeline = ({
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
    //メニューボタンのスタイリング変更
    buttonEl.classList.add("is-open");
  })
    //ページめくり風アニメーション
    .to(flipEl, {
      xPercent: -100,
      yPercent: 50,
      duration: 0.5,
      ease: "power3.out",
    })
    .add(() => {
      //メニュー表示
      menuEl.classList.remove("invisible");
      menuEl.classList.add("is-open", "visible");
    });

  return tl;
};

export default createMenuOpenTimeline;
