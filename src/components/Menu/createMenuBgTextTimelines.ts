import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import { gsap } from "gsap";

const createMenuBgTextTimelines = () => {
  const textTopEl: HTMLElement | null = document.querySelector(
    "#menu-deco .deco-top",
  );
  const textBottomEl: HTMLElement | null = document.querySelector(
    "#menu-deco .deco-bottom",
  );

  let timelines: GSAPTimeline[] = [];

  if (!textTopEl || !textBottomEl) return timelines;

  const addTimeline = (selector: HTMLElement) => {
    let tl = gsap.timeline({
      delay: 3.0,
      repeat: -1,
      repeatDelay: 6.0,
    });

    createTextGradientTimeline({
      selector,
      tl,
      faded: true,
      opacity: 0.05,
    });

    tl.timeScale(0.8);
    timelines.push(tl);
  };

  addTimeline(textTopEl);
  addTimeline(textBottomEl);

  return timelines;
};

export default createMenuBgTextTimelines;
