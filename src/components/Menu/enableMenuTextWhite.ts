import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const enableMenuTextWhite = () => {
  const sectionEl = document.getElementById("company");
  const menuLinks = document.querySelectorAll("#menu a");

  if (!sectionEl || !menuLinks) return;

  if (
    window.matchMedia("(min-width: 1024px)").matches &&
    sectionEl &&
    menuLinks
  ) {
    gsap.registerPlugin(ScrollTrigger);

    return gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        id: "menu-color",
        start: "top top",
        end: "bottom+=120% bottom",
        toggleClass: { targets: menuLinks, className: "text-white" },
        markers: true,
      },
    });
  }
};

export default enableMenuTextWhite;
