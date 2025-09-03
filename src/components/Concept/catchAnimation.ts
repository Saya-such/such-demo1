import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resetScrollTriggerTls from "@/animations/scrollTriggers/resetScrollTriggerTls";

const chatchAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const trigger = document.getElementById("concept-catch");
  const conceptCatchEl = trigger?.querySelector("span");
  const catchSize = conceptCatchEl?.clientHeight;
  const conceptFixed = document.getElementById("concept-fixed");
  const conceptMain = document.getElementById("concept-main");
  const scrollCatchEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  let isFirst: boolean = true;

  if (catchSize && conceptCatchEl && trigger && scrollCatchEl) {
    const offset = Number(catchSize + 50);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: `top -${offset}px`,
        scrub: true,
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
    });

    tl.fromTo(
      scrollCatchEl,
      {
        skewY: 0,
        scaleX: 1.0,
        scaleY: 1.0,
        rotate: 0,
      },
      {
        skewY: 12,
        scaleX: 1.05,
        scaleY: 1.6,
        rotate: -12,
        duration: 3.0,
        onComplete: () => {
          if (isFirst) {
            isFirst = false;
            resetScrollTriggerTls();
          }
        },
      },
    );
  }
};

export default chatchAnimation;
