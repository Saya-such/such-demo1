import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const companyScrollTriggerZoomTimeline = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  let timelines: GSAPTimeline[] = [];

  mm.add("(orientation: portrait) and (max-width: 700px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        id: "company-scale",
        start: "top-=15% bottom",
        end: "bottom+=100% top",
        scrub: true,
      },
    });

    tl.set(".company-wrapper", {
      scale: 0.9,
      opacity: 0,
    })
      .to(
        ".company-wrapper",
        {
          opacity: 1.0,
          duration: 0.1,
          ease: "none",
        },
        "<0.15",
      )
      .to(
        ".company-wrapper",
        {
          scale: 1.0,
          opacity: 1.0,
          duration: 0.1,
          ease: "none",
        },
        0.25,
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

    timelines.push(tl);
  });

  mm.add("(min-width: 701px), (orientation: landscape)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        id: "company-scale",
        start: "top bottom",
        end: "bottom+=50% top",
        scrub: true,
      },
    });

    tl.set(".company-wrapper", {
      scale: 0.9,
      opacity: 0,
    })
      .to(".company-wrapper", {
        opacity: 1.0,
        duration: 0.2,
        ease: "none",
      })
      .to(".company-wrapper", {
        scale: 1.0,
        opacity: 1.0,
        duration: 0.1,
        ease: "none",
      })
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

    timelines.push(tl);
  });

  return timelines;
};

export default companyScrollTriggerZoomTimeline;
