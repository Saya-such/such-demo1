import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @description companyセクション用のZOOMアニメーションのTimelineを生成する。
 * - Timeline生成 → 配列で返却 → companyScrollTriggerTimelineにて管理
 */
const companyScrollTriggerPinTimeline = (): GSAPTimeline | void => {
  const createTimeline = (fadeInDuration: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-wrapper",
        id: "company-pin",
        start: "top top",
        end: "+=100%",
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
        duration: 0.1,
        opacity: 0,
      },
      0.9,
    ).to(
      ".company-arrow",
      {
        duration: 0.1,
        opacity: 0,
      },
      "<",
    );

    return tl;
  };

  if (
    window.matchMedia("(orientation: portrait) and (max-width: 700px)").matches
  ) {
    return createTimeline(0.2);
  } else {
    return createTimeline(0.1);
  }
};

export default companyScrollTriggerPinTimeline;
