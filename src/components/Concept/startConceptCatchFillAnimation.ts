import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTimelines from "@/animations/resetScrollTriggers/managers/resetScrollTriggerTimelines";

gsap.registerPlugin(ScrollTrigger);

/**
 * conceptセクション上のキャッチコピーのアニメーションの実行をする。
 * - スクロールに応じて固定・非固定を切り替え、関連要素の表示/非表示を制御する。
 * - 視覚的には「固定要素上の淡いキャッチコピーcatchElが、スクロールによりheroの黒い文字からこの淡いグレーに満たされていく」演出。
 *
 * ※後続のアニメーションであるstartConceptCatchSkewAnimationのアニメーション対象のDOM要素はcatchScrollEl(このTimelineにて.scrollを付与することにより表示される CSS記述場所はglobal.css)
 */
const startConceptCatchFillAnimation = () => {
  const trigger = document.getElementById("concept-catch");
  const catchEl = trigger?.querySelector("span");
  const catchHeight = catchEl?.clientHeight;
  const fixedEl = document.getElementById("concept-fixed");
  const mainEl = document.getElementById("concept-main");
  const catchScrollEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  if (!trigger || !catchEl || !catchHeight || !catchScrollEl) return;

  let isFirst: boolean = true;
  const offset = Number(catchHeight + 50);

  gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "catchFill",
      start: `top -${offset}px`,
      onEnter: () => {
        trigger.classList.remove("fixed");
        fixedEl?.classList.replace("h-svh", "hidden");
        mainEl?.classList.replace("opacity-0", "opacity-100");
        catchScrollEl.classList.add("scroll");
      },
      onLeaveBack: () => {
        trigger.classList.add("fixed");
        fixedEl?.classList.replace("hidden", "h-svh");
        mainEl?.classList.replace("opacity-100", "opacity-0");
        catchScrollEl.classList.remove("scroll");
      },
    },
    onComplete: () => {
      //初回のみ実行
      //※fixedElが非表示になるので、以降のセクションのScrollTriggerのtrigger位置を合わせる必要があるため、このタイミングでTimelineを生成
      if (isFirst) {
        isFirst = false;
        resetScrollTriggerTimelines();
      }
    },
  });
};

export default startConceptCatchFillAnimation;
