import { gsap } from "gsap";

const startWorksTextLoopAnimation = (loopText: HTMLElement) => {
  const totalWidth = loopText.scrollWidth / 2;
  let mm = gsap.matchMedia();

  let tl: GSAPTimeline | null = null;

  const createTimeline = (tl: GSAPTimeline, num: number) => {
    tl.to(loopText, {
      x: -totalWidth,
      duration: num,
      ease: "none",
      repeat: -1,
    });
  };

  mm.add("(max-width: 1023px)", () => {
    tl = gsap.timeline();

    createTimeline(tl, 20);

    return tl;
  });

  mm.add("(min-width: 1024px)", () => {
    tl = gsap.timeline();

    createTimeline(tl, 30);

    return tl;
  });

  return tl;
};

export default startWorksTextLoopAnimation;
