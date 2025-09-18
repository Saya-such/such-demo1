import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTimelines from "@/animations/resetScrollTriggers/managers/resetScrollTriggerTimelines";

gsap.registerPlugin(ScrollTrigger);

const startConceptCatchFillAnimation = () => {
  const trigger = document.getElementById("concept-catch");
  const catchEl = trigger?.querySelector("span");
  const catchHeight = catchEl?.clientHeight;
  const fixedEl = document.getElementById("concept-fixed");
  const mainEl = document.getElementById("concept-main");
  const catchScrollEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  if (!trigger || !catchEl || !catchHeight || !catchScrollEl) return;

  let isFirst: boolean = true;
  const offset = Number(catchHeight + 50);

  gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "catchFill",
      start: `top -${offset}px`,
      onEnter: () => {
        trigger.classList.remove("fixed");
        fixedEl?.classList.replace("h-svh", "hidden");
        mainEl?.classList.replace("opacity-0", "opacity-100");
        catchScrollEl.classList.add("scroll");
      },
      onLeaveBack: () => {
        trigger.classList.add("fixed");
        fixedEl?.classList.replace("hidden", "h-svh");
        mainEl?.classList.replace("opacity-100", "opacity-0");
        catchScrollEl.classList.remove("scroll");
      },
    },
    onComplete: () => {
      if (isFirst) {
        isFirst = false;
        resetScrollTriggerTimelines();
      }
    },
  });
};

export default startConceptCatchFillAnimation;
