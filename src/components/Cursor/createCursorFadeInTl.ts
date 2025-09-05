import { gsap } from "gsap";

const createCursorFadeInTl = (cursor: HTMLElement) => {
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    cursor,
    {
      scale: 0,
      opacity: 0,
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

export default createCursorFadeInTl;
