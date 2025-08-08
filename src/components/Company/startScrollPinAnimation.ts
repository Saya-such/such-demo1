import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startScrollPinAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        markers: true,
      },
    })
    .set(".company-container", {
      opacity: 0,
    })
    .set(".company-arrow", {
      opacity: 0,
    })
    .to(".company-container", {
      duration: 0.05,
      opacity: 1.0,
    })
    .to(
      ".company-arrow",
      {
        duration: 0.05,
        opacity: 1.0,
      },
      "<",
    )
    .to(
      ".company-container",
      {
        duration: 0.05,
        opacity: 0,
      },
      0.95,
    )
    .to(
      ".company-arrow",
      {
        duration: 0.05,
        opacity: 0,
      },
      "<",
    );

  return tl;
};

export default startScrollPinAnimation;
