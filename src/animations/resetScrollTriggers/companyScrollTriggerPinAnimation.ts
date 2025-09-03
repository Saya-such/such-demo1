import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const companyScrollTriggerPinAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(orientation: portrait) and (max-width: 700px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      },
    });

    tl.set(".company-container", {
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
          duration: 0.1,
          opacity: 0,
        },
        0.9,
      )
      .to(
        ".company-arrow",
        {
          duration: 0.1,
          opacity: 0,
        },
        "<",
      );

    return tl;
  });

  mm.add("(min-width: 701px), (orientation: landscape)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });
    tl.set(".company-container", {
      opacity: 0,
    })
      .set(".company-arrow", {
        opacity: 0,
      })
      .to(".company-container", {
        duration: 0.1,
        opacity: 1.0,
      })
      .to(
        ".company-arrow",
        {
          duration: 0.1,
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

    return tl;
  });
};

export default companyScrollTriggerPinAnimation;
