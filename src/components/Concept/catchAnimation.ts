import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const chatchAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const trigger = document.getElementById("concept-catch");
  const conceptCatchEl = trigger?.querySelector("span");
  const catchSize = conceptCatchEl?.clientHeight;
  const conceptFixed = document.getElementById("concept-fixed");

  if (catchSize && conceptCatchEl && trigger) {
    const offset = Number(catchSize + 50);
    console.log(offset);

    gsap.timeline({
      scrollTrigger: {
        trigger,
        start: `top -${offset}px`,
        scrub: true,
        onEnter: () => {
          trigger.classList.remove("fixed");
          conceptFixed?.classList.remove("h-lvh");
          conceptCatchEl.classList.add("invisible");
        },
        onLeaveBack: () => {
          trigger.classList.add("fixed");
          conceptFixed?.classList.add("h-lvh");
          conceptCatchEl.classList.remove("invisible");
        },
      },
    });
  }
};

export default chatchAnimation;
