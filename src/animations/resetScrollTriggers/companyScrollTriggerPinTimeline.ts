import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @description companyセクション用のZOOMアニメーションのTimelineを生成する。
 * - Timeline生成 → 配列で返却 → companyScrollTriggerTimelineにて管理
 */
const companyScrollTriggerPinTimeline = (): GSAPTimeline | void => {
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

  if (
    window.matchMedia("(orientation: portrait) and (max-width: 700px)").matches
  ) {
    return createTimeline({
      end: "+=150%",
      fadeInDuration: 0.2,
      fadeOutDuration: 0.1,
      fadeOutAt: 0.9,
    });
  } else {
    return createTimeline({
      end: "+=100%",
      fadeInDuration: 0.1,
      fadeOutDuration: 0.2,
      fadeOutAt: 0.8,
    });
  }
};

export default companyScrollTriggerPinTimeline;
