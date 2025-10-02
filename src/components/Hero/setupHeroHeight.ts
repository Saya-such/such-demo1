import setupElementHeight from "@/libs/setupElementHeight";

/**
 * スマホのUIバー対策のため、heroセクションの高さをビューポートに合わせる
 */
const setupHeroHeight = () => {
  const heroEl = document.getElementById("hero");
  if (!heroEl) return;

  setupElementHeight(heroEl);
};

export default setupHeroHeight;
