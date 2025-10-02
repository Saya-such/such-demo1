import setupElementHeight from "@/libs/setupElementHeight";

const setupHeroHeight = () => {
  const heroEl = document.getElementById("hero");

  if (!heroEl) return;

  setupElementHeight(heroEl);
};

export default setupHeroHeight;
