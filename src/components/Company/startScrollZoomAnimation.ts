import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startScrollZoomAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        markers: true,
      },
    })
    .fromTo(
      ".company-wrapper",
      {
        scale: 0.5,
      },
      {
        scale: 1.0,
        duration: 0.1,
        ease: "none",
      },
    )
    .to(
      ".company-wrapper",
      {
        scale: 0.5,
        duration: 0.1,
        ease: "none",
      },
      0.9,
    );

  return tl;
};

export default startScrollZoomAnimation;
