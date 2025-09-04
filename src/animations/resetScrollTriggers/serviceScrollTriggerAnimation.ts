import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const serviceScrollTriggerAnimation = () => {
  const sectionEl = document.getElementById("service");

  let timelines: GSAPTimeline[] = [];

  if (!sectionEl) return timelines;

  if (window.matchMedia("(min-width: 768px)").matches && sectionEl) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionEl,
          id: "service",
          start: "top bottom",
          end: "bottom center",
          once: true,
        },
      })
      .fromTo(
        ".service-list li",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          stagger: 0.3,
          duration: 0.5,
          opacity: 1.0,
        },
      );

    timelines.push(tl);
  }

  return timelines;
};

export default serviceScrollTriggerAnimation;
