import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const companyScrollTriggerZoomTimeline = (): GSAPTimeline[] => {
  const mm = gsap.matchMedia();
  let timelines: GSAPTimeline[] = [];

  const createTimeline = ({
    start,
    end,
    fadeInDuration,
    fadeInPos,
    scaleUpPos,
  }: {
    start: string;
    end: string;
    fadeInDuration: number;
    fadeInPos?: string | number;
    scaleUpPos?: string | number;
  }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        id: "company-scale",
        start,
        end,
        scrub: true,
      },
    });

    //初期状態
    tl.set(".company-wrapper", {
      scale: 0.9,
      opacity: 0,
    });

    //フェードイン
    tl.to(
      ".company-wrapper",
      {
        opacity: 1.0,
        duration: fadeInDuration,
        ease: "none",
      },
      fadeInPos,
    );

    //スケールアップ
    tl.to(
      ".company-wrapper",
      {
        scale: 1.0,
        opacity: 1.0,
        duration: 0.1,
        ease: "none",
      },
      scaleUpPos,
    );

    //スケールダウン
    tl.to(
      ".company-wrapper",
      {
        scale: 0.9,
        opacity: 0.9,
        duration: 0.1,
        ease: "none",
      },
      0.8,
    );

    //フェードアウト
    tl.to(
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

  mm.add("(orientation: portrait) and (max-width: 700px)", () => {
    timelines.push(
      createTimeline({
        start: "top-=15% bottom",
        end: "bottom+=100% top",
        fadeInDuration: 0.1,
        fadeInPos: "<0.15",
        scaleUpPos: 0.25,
      }),
    );
  });

  mm.add("(min-width: 701px), (orientation: landscape)", () => {
    timelines.push(
      createTimeline({
        start: "top bottom",
        end: "bottom+=50% top",
        fadeInDuration: 0.2,
      }),
    );
  });

  return timelines;
};

export default companyScrollTriggerZoomTimeline;
