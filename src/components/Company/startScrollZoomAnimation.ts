import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startScrollZoomAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  let tl = gsap.timeline();

  mm.add("(max-width: 1023px)", () => {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        id: "company-scale",
        start: "top bottom",
        end: "bottom+=120% top",
        scrub: true,
      },
    });
  });

  mm.add("(min-width: 1024px)", () => {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        id: "company-scale",
        start: "top bottom",
        end: "bottom+=80% top",
        scrub: true,
      },
    });
  });

  tl.set(".company-wrapper", {
    scale: 0.9,
    opacity: 0,
  })
    .to(".company-wrapper", {
      opacity: 1.0,
      duration: 0.1,
      ease: "none",
    })
    .to(
      ".company-wrapper",
      {
        scale: 1.0,
        opacity: 1.0,
        duration: 0.1,
        ease: "none",
      },
      0.1,
    )
    .to(
      ".company-wrapper",
      {
        scale: 0.9,
        opacity: 0.9,
        duration: 0.1,
        ease: "none",
      },
      0.8,
    )
    .to(
      ".company-wrapper",
      {
        opacity: 0,
        duration: 0.1,
        ease: "none",
      },
      0.9,
    );

  return tl;
};

export default startScrollZoomAnimation;
