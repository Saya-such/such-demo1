import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTls from "@/animations/resetScrollTriggers/managers/resetScrollTriggerTls";

const startConceptCatchFillAnimation = () => {
  const trigger = document.getElementById("concept-catch");
  const conceptCatchEl = trigger?.querySelector("span");
  const catchSize = conceptCatchEl?.clientHeight;
  const conceptFixed = document.getElementById("concept-fixed");
  const conceptMain = document.getElementById("concept-main");
  const scrollCatchEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  if (catchSize && conceptCatchEl && trigger && scrollCatchEl) {
    gsap.registerPlugin(ScrollTrigger);

    let isFirst: boolean = true;

    const offset = Number(catchSize + 50);

    gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "catchFill",
        start: `top -${offset}px`,
        onEnter: () => {
          trigger.classList.remove("fixed");
          conceptFixed?.classList.remove("h-lvh");
          conceptFixed?.classList.add("hidden");
          conceptMain?.classList.remove("opacity-0");
          conceptMain?.classList.add("opacity-100");
          scrollCatchEl.classList.add("scroll");
        },
        onLeaveBack: () => {
          trigger.classList.add("fixed");
          conceptFixed?.classList.add("h-lvh");
          conceptFixed?.classList.remove("hidden");
          conceptMain?.classList.remove("opacity-100");
          conceptMain?.classList.add("opacity-0");
          scrollCatchEl.classList.remove("scroll");
        },
      },
      onComplete: () => {
        if (isFirst) {
          isFirst = false;
          resetScrollTriggerTls();
        }
      },
    });
  }
};

export default startConceptCatchFillAnimation;
