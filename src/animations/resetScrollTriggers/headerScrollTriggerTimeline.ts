import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headerScrollTriggerTimeline = () => {
  const trigger = document.getElementById("company");
  const menuLinks = document.querySelectorAll("#menu a");
  const blackLogo = document.querySelector("#logo .logo-bl");
  const whiteLogo = document.querySelector("#logo .logo-white");
  const hideElement = (selector: HTMLElement) => {
    selector.classList.remove("visible");
    selector.classList.add("invisible");
  };
  const showElement = (selector: HTMLElement) => {
    selector.classList.remove("invisible");
    selector.classList.add("visible");
  };

  let timelines: GSAPTimeline[] = [];

  if (!trigger || !menuLinks || !blackLogo || !whiteLogo) return timelines;

  if (
    window.matchMedia("(min-width: 1024px)").matches &&
    trigger &&
    menuLinks &&
    blackLogo &&
    whiteLogo
  ) {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "menu-color",
        start: "top top",
        end: "bottom+=120% bottom",
        toggleClass: { targets: menuLinks, className: "text-white" },
        onEnter: () => {
          hideElement(blackLogo as HTMLElement);
          showElement(whiteLogo as HTMLElement);
        },
        onLeave: () => {
          hideElement(whiteLogo as HTMLElement);
          showElement(blackLogo as HTMLElement);
        },
        onEnterBack: () => {
          hideElement(blackLogo as HTMLElement);
          showElement(whiteLogo as HTMLElement);
        },
        onLeaveBack: () => {
          hideElement(whiteLogo as HTMLElement);
          showElement(blackLogo as HTMLElement);
        },
      },
    });

    timelines.push(tl);
  }

  return timelines;
};

export default headerScrollTriggerTimeline;
