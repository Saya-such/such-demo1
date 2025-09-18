import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const startConceptCatchSkewAnimation = () => {
  const trigger = document.getElementById("concept");
  const catchScrollEl = document
    .getElementById("catch-scroll")
    ?.querySelector("span");

  if (!trigger || !catchScrollEl) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "catchSkew",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
    },
  });

  tl.fromTo(
    catchScrollEl,
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
    },
  );
};

export default startConceptCatchSkewAnimation;
