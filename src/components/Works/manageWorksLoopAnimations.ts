import { gsap } from "gsap";
import createWorksGalleryLoopTimeline from "./createWorksGalleryLoopTimeline";
import createWorksTextLoopTimeline from "./createWorksTextLoopTimeline";

const manageWorksLoopAnimations = () => {
  const sectionEl = document.getElementById("works");
  const galleryEl = document.getElementById("works-list");
  const textEl = document.getElementById("loop-text");

  if (!sectionEl || !galleryEl || !textEl) return;

  let galleryLoopTl: GSAPTimeline | null = null;
  let textLoopTl: GSAPTimeline | null = null;

  const stopAnimations = () => {
    galleryLoopTl?.kill();
    gsap.set(galleryEl, { x: 0 });
    galleryLoopTl = null;

    textLoopTl?.kill();
    gsap.set(textEl, { x: 0 });
    textLoopTl = null;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          if (!galleryLoopTl) {
            galleryLoopTl = createWorksGalleryLoopTimeline(galleryEl);
          }
          if (!textLoopTl) {
            textLoopTl = createWorksTextLoopTimeline(textEl);
          }
        } else {
          stopAnimations();
        }
      },
      { threshold: 0 },
    );
  });

  observer.observe(sectionEl);
};

export default manageWorksLoopAnimations;
