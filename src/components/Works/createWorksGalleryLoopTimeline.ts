import { gsap } from "gsap";

const createWorksGalleryLoopTimeline = (
  galleryEl: HTMLElement,
): GSAPTimeline => {
  const totalWidth = galleryEl.scrollWidth / 2;

  const tl = gsap.timeline();

  tl.to(galleryEl, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
  });

  return tl;
};

export default createWorksGalleryLoopTimeline;
