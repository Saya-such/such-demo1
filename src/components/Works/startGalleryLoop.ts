import { gsap } from "gsap";

const startGalleryLoop = (list: HTMLElement) => {
  const totalWidth = list.scrollWidth / 2;

  return gsap.timeline().to(list, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
  });
};

export default startGalleryLoop;
