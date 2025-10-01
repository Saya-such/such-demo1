import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTimelines from "@/animations/resetScrollTriggers/managers/resetScrollTriggerTimelines";

gsap.registerPlugin(ScrollTrigger);

/**
 * conceptセクション上のキャッチコピーのアニメーションの実行をする。
 * - 固定されていたキャッチコピーfixedCatchの非表示
 * - conceptセクション内に配置するtriggerの表示
 * - これらの要素の非表示/表示により、同一の要素(キャッチコピー)が固定を解除されscale, skewが変化するかのような演出。
 */
const startConceptCatchAnimation = () => {
  const trigger = document.getElementById("catch-scroll");
  const fixedEl = document.getElementById("concept-fixed");
  const mainEl = document.getElementById("concept-main");

  if (!trigger || !fixedEl || !mainEl) return;

  let isFirst: boolean = true;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "catchAnimation",
      start: "bottom bottom",
      end: "top top",
      scrub: true,
      onEnter: () => {
        fixedEl.classList.add("hidden");
        trigger.classList.remove("hidden");
        mainEl.classList.replace("opacity-0", "opacity-100");
      },
      onLeaveBack: () => {
        fixedEl.classList.remove("hidden");
        trigger.classList.add("hidden");
        mainEl.classList.replace("opacity-100", "opacity-0");
      },
    },
    onComplete: () => {
      //後で削除する！！
      if (isFirst) {
        isFirst = false;
        resetScrollTriggerTimelines();
      }
    },
  });

  //特にスマホだとテキストとキャッチコピーが被るので若干淡くする。
  tl.fromTo(
    trigger,
    {
      opacity: 0.1,
    },
    {
      duration: 0.1,
      opacity: 0.05,
    },
  );

  //scale, skewの変化
  tl.fromTo(
    trigger,
    {
      skewY: 0,
      scaleX: 1.0,
      scaleY: 1.0,
      rotate: 0,
    },
    {
      duration: 0.9,
      skewY: 12,
      scaleX: 1.05,
      scaleY: 1.6,
      rotate: -12,
    },
  );
};

export default startConceptCatchAnimation;
