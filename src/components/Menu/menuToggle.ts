import openMenu from "./openMenu";
import closeMenu from "./closeMenu";

const menuToggle = () => {
  const buttonEl = document.getElementById("menu-button");
  const menuEl = document.getElementById("sp-menu");
  const flipEl = document.getElementById("menu-flip");

  buttonEl?.addEventListener("click", () => {
    if (!buttonEl.classList.contains("is-open")) {
      if (flipEl && menuEl) {
        openMenu({ flipEl, menuEl, buttonEl });
      }
    } else {
      if (flipEl && menuEl) {
        closeMenu({ flipEl, menuEl, buttonEl });
      }
    }
  });
};

export default menuToggle;
