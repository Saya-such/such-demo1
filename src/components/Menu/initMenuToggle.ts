import startMenuOpenAnimation from "./startMenuOpenAnimation";
import startMenuBgAnimation from "./startMenuBgAnimation";
import startMenuCloseAnimation from "./startMenuCloseAnimation";

const initMenuToggle = () => {
  const buttonEl = document.getElementById("menu-button");
  const menuEl = document.getElementById("sp-menu");
  const flipEl = document.getElementById("menu-flip");

  if (!buttonEl || !menuEl || !flipEl) return;

  let menuTimeline: GSAPTimeline | null = null;
  let bgTextTimelines: GSAPTimeline[] = [];

  buttonEl?.addEventListener("click", () => {
    menuTimeline?.kill();
    bgTextTimelines.forEach((tl) => {
      tl.kill();
    });
    menuTimeline = null;
    bgTextTimelines = [];

    if (!buttonEl.classList.contains("is-open")) {
      menuTimeline = startMenuOpenAnimation({ flipEl, menuEl, buttonEl });
      bgTextTimelines = startMenuBgAnimation();
    } else {
      startMenuCloseAnimation({ flipEl, menuEl, buttonEl });
    }
  });
};

export default initMenuToggle;
