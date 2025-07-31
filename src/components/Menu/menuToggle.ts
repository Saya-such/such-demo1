import openMenu from "./openMenu";
import openBgTextAnimation from "./openBgTextAnimation";
import closeMenu from "./closeMenu";

const menuToggle = () => {
  const buttonEl = document.getElementById("menu-button");
  const menuEl = document.getElementById("sp-menu");
  const flipEl = document.getElementById("menu-flip");

  let menuTimeline: GSAPTimeline | null = null;
  let bgTextTimeline: GSAPTimeline | null = null;

  if (!buttonEl || !menuEl || !flipEl) return;

  buttonEl?.addEventListener("click", () => {
    menuTimeline?.kill();
    bgTextTimeline?.kill();
    menuTimeline = null;
    bgTextTimeline = null;

    if (!buttonEl.classList.contains("is-open")) {
      if (flipEl && menuEl) {
        menuTimeline = openMenu({ flipEl, menuEl, buttonEl });
        bgTextTimeline = openBgTextAnimation();
      }
    } else {
      if (flipEl && menuEl) {
        closeMenu({ flipEl, menuEl, buttonEl });
      }
    }
  });
};

export default menuToggle;
