const pageFlipAnimation = (
  selector: HTMLElement | string,
  tl: gsap.core.Timeline,
) => {
  tl.fromTo(
    selector,
    {
      scale: 2,
      aspectRatio: "1/cos(30deg)",
      clipPath: "polygon(0 0, 100% 0, 0 100%)",
    },
    {
      xPercent: -100,
      yPercent: -100,
      duration: 0.7,
      ease: "power3.in",
    },
  );

  return tl;
};

export default pageFlipAnimation;
