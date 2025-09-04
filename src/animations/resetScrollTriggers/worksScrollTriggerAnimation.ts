import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const worksScrollTriggerAnimation = () => {
  const galleryList = document.getElementById("works-list");

  let timelines: GSAPTimeline[] = [];

  if (!galleryList) return timelines;

  gsap.registerPlugin(ScrollTrigger);

  const trigger = galleryList;
  let mm = gsap.matchMedia();

  const createTimeLine = (num: number) => {
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
      y: num,
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

export default worksScrollTriggerAnimation;
