import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * worksセクション内画像リストの慣性スクロールのTimelineを生成する。
 * - DOM取得 → Timelineを生成 → 配列で返却
 * - resetScrollTriggerTimelinesによって一括再生成される。
 */
const worksScrollTriggerTimeline = () => {
  const trigger = document.getElementById("works-list");
  const timelines: GSAPTimeline[] = [];

  if (!trigger) return timelines;

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
    timelines.push(createTimeLine(-50));
  });

  mm.add("(min-width: 1024px)", () => {
    timelines.push(createTimeLine(-80));
  });

  return timelines;
};

export default worksScrollTriggerTimeline;
