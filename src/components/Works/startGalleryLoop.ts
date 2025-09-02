import { gsap } from "gsap";

const startGalleryLoop = (list: HTMLElement) => {
  const totalWidth = list.scrollWidth / 2;

  let tl = gsap.timeline();

  tl.to(list, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
  });

  return tl;
};

export default startGalleryLoop;
