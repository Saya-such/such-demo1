import startGalleryLoop from "./startGalleryLoop";
import startTextLoop from "./startTextLoop";
import { gsap } from "gsap";

const initWorks = () => {
  const sectionEl = document.getElementById("works");
  const galleryList = document.getElementById("works-list");
  const loopText = document.getElementById("loop-text");

  if (!sectionEl || !galleryList || !loopText) return;

  let galleryTimeline: GSAPTimeline | null = null;
  let textLoopTimeline: GSAPTimeline | null = null;

  const stopAnimations = () => {
    galleryTimeline?.kill();
    gsap.set(galleryList, { x: 0 });
    galleryTimeline = null;

    textLoopTimeline?.kill();
    gsap.set(loopText, { x: 0 });
    textLoopTimeline = null;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          if (!galleryTimeline) {
            galleryTimeline = startGalleryLoop(galleryList);
          }
          if (!textLoopTimeline) {
            textLoopTimeline = startTextLoop(loopText);
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

export default initWorks;
