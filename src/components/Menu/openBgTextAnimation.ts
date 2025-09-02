import { gsap } from "gsap";

const openBgTextAnimation = () => {
  const textTop = document.querySelector("#menu-deco .deco-top");
  const textBottom = document.querySelector("#menu-deco .deco-bottom");

  let tl = gsap.timeline({
    delay: 3.0,
    repeat: -1,
    repeatDelay: 3.0,
  });

  tl.fromTo(
    textTop,
    {
      x: 0,
      y: 0,
      skewY: 0,
      scale: 1.0,
      rotate: 180,
    },
    {
      x: 10,
      y: -10,
      skewY: -7,
      scaleX: 1.02,
      scaleY: 1.3,
      rotate: 187,
      duration: 0.1,
      ease: "power1.in",
    },
  )
    .fromTo(
      textBottom,
      {
        x: 0,
        y: 0,
        skewY: 0,
        scale: 1.0,
        rotate: 0,
      },
      {
        x: -10,
        y: 10,
        skewY: -7,
        scaleX: 1.02,
        scaleY: 1.3,
        rotate: 7,
        duration: 0.1,
        ease: "power1.in",
      },
      "<",
    )
    .to(
      textTop,
      {
        x: 0,
        y: 0,
        skewY: 0,
        scale: 1.0,
        rotate: 180,
        duration: 0.1,
        ease: "power1.in",
      },
      "<4.0",
    )
    .to(
      textBottom,
      {
        x: 0,
        y: 0,
        skewY: 0,
        scale: 1.0,
        rotate: 0,
        duration: 0.1,
        ease: "power1.in",
      },
      "<",
    );

  return tl;
};

export default openBgTextAnimation;
