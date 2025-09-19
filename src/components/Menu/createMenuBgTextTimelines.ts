import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import { gsap } from "gsap";

/**
 * @description メニュー背景のテキストアニメーションのTimelineを生成する
 * - 初期状態では非表示のDOM要素を扱うため、この関数内部でDOM取得も行う。
 * - Timelineを生成し返却
 *
 * @returns {GSAPTimeline[]} GSAPTimelineの配列
 */
const createMenuBgTextTimelines = (): GSAPTimeline[] => {
  //DOM取得
  const textTopEl: HTMLElement | null = document.querySelector(
    "#menu-deco .deco-top",
  );
  const textBottomEl: HTMLElement | null = document.querySelector(
    "#menu-deco .deco-bottom",
  );

  let timelines: GSAPTimeline[] = [];

  if (!textTopEl || !textBottomEl) return timelines;

  const addTimeline = (selector: HTMLElement) => {
    //リピート処理
    const tl = gsap.timeline({
      delay: 3.0,
      repeat: -1,
      repeatDelay: 6.0,
    });

    //テキストのグラデーションアニメーション
    createTextGradientTimeline({
      selector,
      tl,
      faded: true,
      opacity: 0.05,
    });

    tl.timeScale(0.8);
    timelines.push(tl);
  };

  addTimeline(textTopEl);
  addTimeline(textBottomEl);

  return timelines;
};

export default createMenuBgTextTimelines;
