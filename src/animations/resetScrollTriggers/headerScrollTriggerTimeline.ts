import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headerScrollTriggerTimeline = () => {
  const trigger = document.getElementById("company");
  const menuLinks = document.querySelectorAll("#menu a");
  const blackLogo = document.querySelector<HTMLElement>("#logo .logo-bl");
  const whiteLogo = document.querySelector<HTMLElement>("#logo .logo-white");

  let timelines: GSAPTimeline[] = [];

  if (!trigger || !blackLogo || !whiteLogo) return timelines;

  const toggleVisibility = (el: HTMLElement, visible: boolean) => {
    el.classList.toggle("visible", visible);
    el.classList.toggle("invisible", !visible);
  };

  const showWhiteLogo = () => {
    toggleVisibility(blackLogo, false);
    toggleVisibility(whiteLogo, true);
  };

  const showBlackLogo = () => {
    toggleVisibility(whiteLogo, false);
    toggleVisibility(blackLogo, true);
  };

  if (window.matchMedia("(min-width: 1024px)").matches) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "menu-color",
        start: "top top",
        end: "bottom+=120% bottom",
        toggleClass: { targets: menuLinks, className: "text-white" },
        onEnter: showWhiteLogo,
        onLeave: showBlackLogo,
        onEnterBack: showWhiteLogo,
        onLeaveBack: showBlackLogo,
      },
    });

    timelines.push(tl);
  }

  return timelines;
};

export default headerScrollTriggerTimeline;
