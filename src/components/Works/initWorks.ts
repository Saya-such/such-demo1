import startGalleryLoop from "./startGalleryLoop";
import startTextLoop from "./startTextLoop";

const initWorks = () => {
  const galleryList = document.getElementById("works-list");
  const loopText = document.getElementById("loop-text");

  if (!galleryList || !loopText) return;

  startGalleryLoop(galleryList);
  startTextLoop(loopText);
};

export default initWorks;
