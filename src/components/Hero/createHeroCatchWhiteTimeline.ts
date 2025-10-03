import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @description heroセクション用のキャッチコピーの色の変更のTimelineを生成し返却する。
 * 慣性スクロール時などに裏のfixed要素が見えてしまうケースへの対策。
 * スクロールでheroが画面外に出たとき、黒→白、戻ったとき白→黒に切り替える。
 */
const createHeroCatchWhiteTimeline = (
  heroEl: HTMLElement,
  catchEl: HTMLElement,
): GSAPTimeline => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroEl,
      id: "catchColorWhite",
      start: "bottom+=100% bottom",
      onEnter: () => {
        catchEl.classList.replace("text-black", "text-white");
      },
      onLeaveBack: () => {
        catchEl.classList.replace("text-white", "text-black");
      },
    },
  });

  return tl;
};

export default createHeroCatchWhiteTimeline;
