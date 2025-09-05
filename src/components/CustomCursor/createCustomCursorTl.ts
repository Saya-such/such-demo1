import { gsap } from "gsap";

const createCustomCursorTl = () => {
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    ".custom-cursor",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 0.7,
      duration: 0.3,
      ease: "power1.in",
    },
  );

  return tl;
};

export default createCustomCursorTl;
