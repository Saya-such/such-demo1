import { gsap } from "gsap";

const createWorksTextLoopTimeline = (textEl: HTMLElement): GSAPTimeline => {
  const totalWidth = textEl.scrollWidth / 2;
  const mm = gsap.matchMedia();

  let tl: GSAPTimeline | null = null;

  const createTimeline = (tl: GSAPTimeline, duration: number) => {
    tl.to(textEl, {
      x: -totalWidth,
      duration,
      ease: "none",
      repeat: -1,
    });
  };

  if (window.matchMedia("(max-width: 1023px)").matches) {
    tl = gsap.timeline();
    createTimeline(tl, 20);

    return tl;
  } else {
    tl = gsap.timeline();
    createTimeline(tl, 30);

    return tl;
  }
};

export default createWorksTextLoopTimeline;
