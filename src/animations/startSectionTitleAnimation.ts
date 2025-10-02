import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createTextGradientTimeline } from "@/animations/createTextGradientTimeline";

gsap.registerPlugin(ScrollTrigger);

/**
 * 各セクションタイトル用のScrollTriggerのTimelineを生成する。
 * - DOM取得 → 展開してTimelineを各々生成/実行
 */
const startSectionTitleAnimation = (): GSAPTimeline[] => {
  const triggers = document.querySelectorAll<HTMLElement>(".sec-tit.animation");

  return Array.from(triggers).map((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        id: "sec-tit",
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl.set(el, {
      y: 20,
      opacity: 0,
    })
      .to(
        el,
        {
          y: 0,
          opacity: 1.0,
          duration: 0.3,
        },
        "<0.1",
      )
      .add(() => {
        //テキストグラデーションのアニメーションをtlに追加
        createTextGradientTimeline({
          selector: el,
          tl,
        });
      }, "<0.5");

    return tl;
  });
};

export default startSectionTitleAnimation;
