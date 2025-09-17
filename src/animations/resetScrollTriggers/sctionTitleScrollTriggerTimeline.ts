import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionTitleScrollTriggerTimeline = () => {
  const triggers = document.querySelectorAll<HTMLElement>(".sec-tit.animation");

  return Array.from(triggers).map((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        id: "sec-tit",
        start: "top bottom",
        end: "bottom top",
      },
    });

    tl.set(el, {
      y: 20,
      opacity: 0,
    })
      .to(
        el,
        {
          y: 0,
          opacity: 1.0,
          duration: 0.3,
        },
        "<0.1",
      )
      .add(() => {
        createTextGradientTimeline({
          selector: el,
          tl,
        });
      }, "<0.5");

    return tl;
  });
};

export default sectionTitleScrollTriggerTimeline;
