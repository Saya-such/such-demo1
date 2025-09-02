import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startScrollPinAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    })
    .set(".company-container", {
      opacity: 0,
    })
    .set(".company-arrow", {
      opacity: 0,
    })
    .to(".company-container", {
      duration: 0.2,
      opacity: 1.0,
    })
    .to(
      ".company-arrow",
      {
        duration: 0.2,
        opacity: 1.0,
      },
      "<",
    )
    .to(
      ".company-container",
      {
        duration: 0.2,
        opacity: 0,
      },
      0.8,
    )
    .to(
      ".company-arrow",
      {
        duration: 0.2,
        opacity: 0,
      },
      "<",
    );
};

export default startScrollPinAnimation;
