import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * @description companyセクション用のZOOMアニメーションのTimelineを生成する。
 * - Timeline生成 → 配列で返却 → companyScrollTriggerTimelineにて管理
 */
const companyScrollTriggerZoomTimeline = (): GSAPTimeline | void => {
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
        markers: true,
      },
    });

    //初期状態
    tl.set(".company-scale", {
      scale: 0.9,
      opacity: 0,
    });

    //フェードイン
    tl.to(
      ".company-scale",
      {
        opacity: 1.0,
        duration: fadeInDuration,
        ease: "none",
      },
      fadeInPos,
    );

    //スケールアップ
    tl.to(
      ".company-scale",
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
      ".company-scale",
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
      ".company-scale",
      {
        opacity: 0,
        duration: 0.1,
        ease: "none",
      },
      0.9,
    );

    return tl;
  };

  if (
    window.matchMedia("(orientation: portrait) and (max-width: 700px)").matches
  ) {
    return createTimeline({
      start: "top-=15% bottom",
      end: "bottom+=100% top",
      fadeInDuration: 0.1,
      fadeInPos: "<0.15",
      scaleUpPos: 0.25,
    });
  } else {
    return createTimeline({
      start: "top bottom",
      end: "bottom+=50% top",
      fadeInDuration: 0.2,
    });
  }
};

export default companyScrollTriggerZoomTimeline;
