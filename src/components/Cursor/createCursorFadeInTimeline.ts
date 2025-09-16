import { gsap } from "gsap";

const createCursorFadeInTimeline = (cursor: HTMLElement, e: MouseEvent) => {
  const tl = gsap.timeline();

  tl.set(cursor, { scale: 0, opacity: 0 }).fromTo(
    cursor,
    {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
    },
    {
      scale: 1,
      opacity: 0.8,
      duration: 0.3,
      ease: "power1.in",
    },
  );

  return tl;
};

export default createCursorFadeInTimeline;
