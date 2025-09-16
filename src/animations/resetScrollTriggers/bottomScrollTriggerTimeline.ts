import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bottomScrollTriggerTimeline = () => {
  const trigger = document.getElementById("bottom");

  let timelines: GSAPTimeline[] = [];

  if (!trigger) return timelines;

  if (trigger) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger,
          id: "bottom",
          start: "center bottom",
          end: "bottom bottom",
        },
      })
      .set(".bottom-img", {
        scale: 0.3,
        opacity: 0,
      })
      .to(".bottom-img", {
        scale: 1.0,
        opacity: 1.0,
        duration: 1.0,
        ease: "power3.in",
      })
      .to(".bottom-img", {
        scale: 1.1,
        opacity: 0.95,
        duration: 0.5,
        ease: "back.in",
      })
      .to(".bottom-img", {
        scale: 1.0,
        opacity: 1.0,
        duration: 0.5,
        ease: "power3.in",
      })
      .to(".bottom-img", {
        rotate: 5,
        transformOrigin: "bottom",
        duration: 0.2,
        ease: "circle",
      })
      .to(".bottom-img", {
        rotate: -8,
        opacity: 0.95,
        duration: 0.2,
        ease: "circle",
      })
      .to(".bottom-img", {
        rotate: 0,
        opacity: 1.0,
        duration: 0.5,
        ease: "sine.in",
      });

    timelines.push(tl);
  }

  return timelines;
};

export default bottomScrollTriggerTimeline;
