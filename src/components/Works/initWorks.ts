import enableGalleryScroll from "./enableGalleryScroll";
import startGalleryLoop from "./startGalleryLoop";
import startTextLoop from "./startTextLoop";

const initWorks = () => {
  const sectionEl = document.getElementById("works");
  const galleryList = document.getElementById("works-list");
  const loopText = document.getElementById("loop-text");

  if (!sectionEl || !galleryList || !loopText) return;

  enableGalleryScroll(galleryList);

  let galleryTimeline: GSAPTimeline | null = null;
  let textLoopTimeline: GSAPTimeline | null = null;

  const stopAnimations = () => {
    galleryTimeline?.kill();
    galleryTimeline = null;

    textLoopTimeline?.kill();
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
