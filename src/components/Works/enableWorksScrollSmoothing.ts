import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * worksセクション内画像リストの慣性スクロールのTimelineを生成し実行する。
 * - DOM取得 → Timelineを生成/実行
 */
const enableWorksScrollSmoothing = () => {
  const trigger = document.getElementById("works-list");

  if (!trigger) return;

  const mm = gsap.matchMedia();

  const createTimeLine = (yOffset: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "works",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2,
      },
    });

    tl.to(trigger, {
      y: yOffset,
    });

    return tl;
  };

  mm.add("(max-width: 1023px)", () => {
    createTimeLine(-50);
  });

  mm.add("(min-width: 1024px)", () => {
    createTimeLine(-80);
  });
};

export default enableWorksScrollSmoothing;
