import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startScrollPinAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    })
    .set(".company-container", {
      opacity: 0,
    })
    .set(".company-arrow", {
      opacity: 0,
    });

  mm.add("", () => {
    tl.to(".company-container", {
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
  });

  // mm.add("(min-width: 1024px)", () => {
  //   tl.to(".company-container", {
  //     duration: 0.1,
  //     opacity: 1.0,
  //   })
  //     .to(
  //       ".company-arrow",
  //       {
  //         duration: 0.1,
  //         opacity: 1.0,
  //       },
  //       "<",
  //     )
  //     .to(
  //       ".company-container",
  //       {
  //         duration: 0.1,
  //         opacity: 0,
  //       },
  //       0.9,
  //     )
  //     .to(
  //       ".company-arrow",
  //       {
  //         duration: 0.1,
  //         opacity: 0,
  //       },
  //       "<",
  //     );
  // });

  return tl;
};

export default startScrollPinAnimation;
