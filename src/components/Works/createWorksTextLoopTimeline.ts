import { gsap } from "gsap";

/**
 * @description worksセクションの装飾テキストのループアニメーションのTimelineを生成する。
 * - DOM取得は行わない。
 *
 * @param {HTMLElement} textEl - 装飾テキスト用のDOM要素
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createWorksTextLoopTimeline = (textEl: HTMLElement): GSAPTimeline => {
  //ダミー用の要素も含め2倍の長さになので元の幅に戻すため /2
  const totalWidth = textEl.scrollWidth / 2;

  let tl: GSAPTimeline | null = null;

  const createTimeline = (tl: GSAPTimeline, duration: number) => {
    tl.to(textEl, {
      x: -totalWidth,
      duration,
      ease: "none",
      repeat: -1,
    });
  };

  if (window.matchMedia("(max-width: 1023px)").matches) {
    tl = gsap.timeline();
    createTimeline(tl, 20);

    return tl;
  } else {
    tl = gsap.timeline();
    createTimeline(tl, 30);

    return tl;
  }
};

export default createWorksTextLoopTimeline;
