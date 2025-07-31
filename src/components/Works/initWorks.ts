import startGalleryLoop from "./startGalleryLoop";

const initWorks = () => {
  const galleryList = document.getElementById("works-list");

  if (!galleryList) return;

  startGalleryLoop(galleryList);
};

export default initWorks;
