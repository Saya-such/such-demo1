const createPageFlipTimeline = (
  selector: HTMLElement | string,
  timeline: GSAPTimeline,
) => {
  timeline.fromTo(
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

  return timeline;
};

export default createPageFlipTimeline;
