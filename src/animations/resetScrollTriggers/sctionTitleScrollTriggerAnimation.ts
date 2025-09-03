import type { CreateTimelinesFn } from "@/types/CreateTimelinesFn";
import { startTextGradientAnimation } from "@/animations/common/startTextGradientAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sectionTitleScrollTriggerAnimation = () => {
  const secTitles = document.querySelectorAll(".sec-tit.animation");

  if (!secTitles) return;

  gsap.registerPlugin(ScrollTrigger);

  let timelines: CreateTimelinesFn[] = [];

  secTitles.forEach((el) => {
    let fn = () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          id: "sec-tit",
          start: "top bottom",
          end: "bottom top",
        },
      });

      tl.set(el, {
        y: 30,
        opacity: 0,
      })
        .to(
          el,
          {
            y: 0,
            opacity: 1.0,
            duration: 0.3,
          },
          "<0.2",
        )
        .add(() => {
          startTextGradientAnimation({ selector: el as HTMLElement, tl });
        }, "<0.5");

      return tl;
    };

    timelines.push(fn);
  });

  return timelines;
};

export default sectionTitleScrollTriggerAnimation;
