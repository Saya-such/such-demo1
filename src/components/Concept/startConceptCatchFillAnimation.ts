import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTimelines from "@/animations/resetScrollTriggers/managers/resetScrollTriggerTimelines";

const startConceptCatchFillAnimation = () => {
  const trigger = document.getElementById("concept-catch");
  const catchEl = trigger?.querySelector("span");
  const catchHeight = catchEl?.clientHeight;
  const fixedEl = document.getElementById("concept-fixed");
  const mainEl = document.getElementById("concept-main");
  const catchScrollEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  if (catchHeight && catchEl && trigger && catchScrollEl) {
    gsap.registerPlugin(ScrollTrigger);

    let isFirst: boolean = true;

    const offset = Number(catchHeight + 50);

    gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "catchFill",
        start: `top -${offset}px`,
        onEnter: () => {
          trigger.classList.remove("fixed");
          fixedEl?.classList.remove("h-lvh");
          fixedEl?.classList.add("hidden");
          mainEl?.classList.remove("opacity-0");
          mainEl?.classList.add("opacity-100");
          catchScrollEl.classList.add("scroll");
        },
        onLeaveBack: () => {
          trigger.classList.add("fixed");
          fixedEl?.classList.add("h-lvh");
          fixedEl?.classList.remove("hidden");
          mainEl?.classList.remove("opacity-100");
          mainEl?.classList.add("opacity-0");
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
  }
};

export default startConceptCatchFillAnimation;
