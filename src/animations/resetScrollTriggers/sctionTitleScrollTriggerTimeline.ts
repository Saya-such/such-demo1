import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sectionTitleScrollTriggerTimeline = () => {
  const triggers = document.querySelectorAll(".sec-tit.animation");

  let timelines: GSAPTimeline[] = [];

  if (!triggers) return timelines;

  gsap.registerPlugin(ScrollTrigger);

  triggers.forEach((el) => {
    let tl = gsap.timeline({
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
          selector: el as HTMLElement,
          timeline: tl,
        });
      }, "<0.5");

    timelines.push(tl);
  });

  return timelines;
};

export default sectionTitleScrollTriggerTimeline;
