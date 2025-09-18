import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const companyScrollTriggerPinTimeline = (): GSAPTimeline[] => {
  const mm = gsap.matchMedia();
  let timelines: GSAPTimeline[] = [];

  const createTimeline = ({
    end,
    fadeInDuration,
    fadeOutDuration,
    fadeOutAt,
  }: {
    end: string;
    fadeInDuration: number;
    fadeOutDuration: number;
    fadeOutAt: number;
  }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end,
        pin: true,
        scrub: true,
      },
    });

    //初期状態
    tl.set([".company-container", ".company-arrow"], {
      opacity: 0,
    });

    //フェードイン
    tl.to(".company-container", {
      duration: fadeInDuration,
      opacity: 1.0,
    }).to(
      ".company-arrow",
      {
        duration: fadeInDuration,
        opacity: 1.0,
      },
      "<",
    );

    //フェードアウト
    tl.to(
      ".company-container",
      {
        duration: fadeOutDuration,
        opacity: 0,
      },
      fadeOutAt,
    ).to(
      ".company-arrow",
      {
        duration: fadeOutDuration,
        opacity: 0,
      },
      "<",
    );

    return tl;
  };

  mm.add("(orientation: portrait) and (max-width: 700px)", () => {
    timelines.push(
      createTimeline({
        end: "+=150%",
        fadeInDuration: 0.2,
        fadeOutDuration: 0.1,
        fadeOutAt: 0.9,
      }),
    );
  });

  mm.add("(min-width: 701px), (orientation: landscape)", () => {
    timelines.push(
      createTimeline({
        end: "+=100%",
        fadeInDuration: 0.1,
        fadeOutDuration: 0.2,
        fadeOutAt: 0.8,
      }),
    );
  });

  return timelines;
};

export default companyScrollTriggerPinTimeline;
