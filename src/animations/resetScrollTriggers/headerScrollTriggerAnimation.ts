import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headerScrollTriggerAnimation = () => {
  const sectionEl = document.getElementById("company");
  const menuLinks = document.querySelectorAll("#menu a");
  const logoBlack = document.querySelector("#logo .logo-bl");
  const logoWhite = document.querySelector("#logo .logo-white");
  const removeVisible = (selector: HTMLElement) => {
    selector.classList.remove("visible");
    selector.classList.add("invisible");
  };
  const addVisible = (selector: HTMLElement) => {
    selector.classList.remove("invisible");
    selector.classList.add("visible");
  };

  if (!sectionEl || !menuLinks || !logoBlack || !logoWhite) return;

  if (
    window.matchMedia("(min-width: 1024px)").matches &&
    sectionEl &&
    menuLinks &&
    logoBlack &&
    logoWhite
  ) {
    gsap.registerPlugin(ScrollTrigger);

    return gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        id: "menu-color",
        start: "top top",
        end: "bottom+=120% bottom",
        toggleClass: { targets: menuLinks, className: "text-white" },
        onEnter: () => {
          removeVisible(logoBlack as HTMLElement);
          addVisible(logoWhite as HTMLElement);
        },
        onLeave: () => {
          removeVisible(logoWhite as HTMLElement);
          addVisible(logoBlack as HTMLElement);
        },
        onEnterBack: () => {
          removeVisible(logoBlack as HTMLElement);
          addVisible(logoWhite as HTMLElement);
        },
        onLeaveBack: () => {
          removeVisible(logoWhite as HTMLElement);
          addVisible(logoBlack as HTMLElement);
        },
      },
    });
  }
};

export default headerScrollTriggerAnimation;
