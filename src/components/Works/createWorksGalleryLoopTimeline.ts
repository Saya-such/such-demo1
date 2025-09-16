import { gsap } from "gsap";

const createWorksGalleryLoopTimeline = (galleryEl: HTMLElement) => {
  const totalWidth = galleryEl.scrollWidth / 2;

  let tl = gsap.timeline();

  tl.to(galleryEl, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
  });

  return tl;
};

export default createWorksGalleryLoopTimeline;
