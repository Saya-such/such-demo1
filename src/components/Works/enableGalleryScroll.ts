import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const enableGalleryScroll = (el: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger);

  const trigger = el;
  let mm = gsap.matchMedia();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.2,
    },
  });

  mm.add("(max-width: 1024px)", () => {
    tl.to(trigger, {
      y: -80,
    });
  });

  mm.add("(min-width: 1024px)", () => {
    tl.to(trigger, {
      y: -120,
    });
  });

  return tl;
};

export default enableGalleryScroll;
