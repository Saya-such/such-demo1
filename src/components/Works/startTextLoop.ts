import { gsap } from "gsap";

const startTextLoop = (loopText: HTMLElement) => {
  const totalWidth = loopText.scrollWidth / 2;
  let mm = gsap.matchMedia();

  const tl = gsap.timeline();

  mm.add("(max-width: 1023px)", () => {
    tl.to(loopText, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  mm.add("(min-width: 1024px)", () => {
    tl.to(loopText, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  });

  return tl;
};

export default startTextLoop;
