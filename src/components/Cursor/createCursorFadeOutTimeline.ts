import { gsap } from "gsap";

const createCursorFadeOutTimeline = (cursor: HTMLElement): GSAPTimeline => {
  const tl = gsap.timeline();

  tl.fromTo(
    cursor,
    {
      scale: 1,
      opacity: 0.8,
    },
    {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    },
  );

  return tl;
};

export default createCursorFadeOutTimeline;
