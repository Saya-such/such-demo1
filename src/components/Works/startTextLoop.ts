import { gsap } from "gsap";

const startTextLoop = (loopText: HTMLElement) => {
  const totalWidth = loopText.scrollWidth / 2;

  return gsap.timeline().to(loopText, {
    x: -totalWidth,
    duration: 20,
    ease: "none",
    repeat: -1,
  });
};

export default startTextLoop;
