import startMenuOpenAnimation from "./startMenuOpenAnimation";
import startMenuBgAnimation from "./startMenuBgAnimation";
import startMenuCloseAnimation from "./startMenuCloseAnimation";

const initMenuToggle = () => {
  const buttonEl = document.getElementById("menu-button");
  const menuEl = document.getElementById("sp-menu");
  const flipEl = document.getElementById("menu-flip");

  if (!buttonEl || !menuEl || !flipEl) return;

  let menuTimeline: GSAPTimeline | null = null;
  let bgTextTimeline: GSAPTimeline | null = null;

  buttonEl?.addEventListener("click", () => {
    menuTimeline?.kill();
    bgTextTimeline?.kill();
    menuTimeline = null;
    bgTextTimeline = null;

    if (!buttonEl.classList.contains("is-open")) {
      if (flipEl && menuEl) {
        menuTimeline = startMenuOpenAnimation({ flipEl, menuEl, buttonEl });
        bgTextTimeline = startMenuBgAnimation();
      }
    } else {
      if (flipEl && menuEl) {
        startMenuCloseAnimation({ flipEl, menuEl, buttonEl });
      }
    }
  });
};

export default initMenuToggle;
