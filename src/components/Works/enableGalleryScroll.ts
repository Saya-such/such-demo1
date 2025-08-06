import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const enableGalleryScroll = () => {
  const galleryList = document.getElementById("works-list");

  if (!galleryList) return;

  gsap.registerPlugin(ScrollTrigger);

  const trigger = galleryList;
  let mm = gsap.matchMedia();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "works",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.2,
    },
  });

  mm.add("(max-width: 1023px)", () => {
    tl.to(trigger, {
      y: -50,
    });
  });

  mm.add("(min-width: 1024px)", () => {
    tl.to(trigger, {
      y: -80,
    });
  });
  return tl;
};

export default enableGalleryScroll;
