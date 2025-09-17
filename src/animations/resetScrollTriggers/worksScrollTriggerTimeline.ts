import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const worksScrollTriggerTimeline = () => {
  const trigger = document.getElementById("works-list");

  let mm = gsap.matchMedia();

  let timelines: GSAPTimeline[] = [];

  const createTimeLine = (yOffset: number) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "works",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.2,
      },
    });

    tl.to(trigger, {
      y: yOffset,
    });

    timelines.push(tl);
  };

  mm.add("(max-width: 1023px)", () => {
    createTimeLine(-50);
  });

  mm.add("(min-width: 1024px)", () => {
    createTimeLine(-80);
  });

  return timelines;
};

export default worksScrollTriggerTimeline;
