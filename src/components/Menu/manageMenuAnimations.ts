import createMenuOpenTimeline from "./createMenuOpenTimeline";
import createMenuBgTextTimelines from "./createMenuBgTextTimelines";
import createMenuCloseTimeline from "./createMenuCloseTimeline";

const manageMenuAnimations = () => {
  const buttonEl = document.getElementById("menu-button");
  const menuEl = document.getElementById("sp-menu");
  const flipEl = document.getElementById("menu-flip");

  if (!buttonEl || !menuEl || !flipEl) return;

  let menuTimeline: GSAPTimeline | null = null;
  let bgTextTimelines: GSAPTimeline[] = [];

  buttonEl.addEventListener("click", () => {
    menuTimeline?.kill();
    bgTextTimelines.forEach((tl) => {
      tl.kill();
    });
    menuTimeline = null;
    bgTextTimelines = [];

    if (!buttonEl.classList.contains("is-open")) {
      menuTimeline = createMenuOpenTimeline({ flipEl, menuEl, buttonEl });
      bgTextTimelines = createMenuBgTextTimelines();
    } else {
      createMenuCloseTimeline({ flipEl, menuEl, buttonEl });
    }
  });
};

export default manageMenuAnimations;
