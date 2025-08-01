import { gsap } from "gsap";

const startGalleryLoop = (list: HTMLElement) => {
  const totalWidth = list.scrollWidth / 2;

  return gsap.to(list, {
    x: -totalWidth,
    duration: 100,
    ease: "none",
    repeat: -1,
  });
};

export default startGalleryLoop;
