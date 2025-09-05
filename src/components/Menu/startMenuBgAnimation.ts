import { startTextGradientAnimation } from "@/animations/common/startTextGradientAnimation";
import { gsap } from "gsap";

const startMenuBgAnimation = () => {
  const textTop = document.querySelector("#menu-deco .deco-top");
  const textBottom = document.querySelector("#menu-deco .deco-bottom");

  if (!textTop || !textBottom) return;

  const createTimeline = (selector: HTMLElement) => {
    let tl = gsap.timeline({
      delay: 3.0,
      repeat: -1,
      repeatDelay: 6.0,
    });

    startTextGradientAnimation({
      selector,
      tl,
      faded: true,
      opacity: 0.05,
    });

    tl.timeScale(0.8);
    return tl;
  };

  createTimeline(textTop as HTMLElement);
  createTimeline(textBottom as HTMLElement);
};

export default startMenuBgAnimation;
