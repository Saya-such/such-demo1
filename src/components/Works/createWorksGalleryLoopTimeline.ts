import { gsap } from "gsap";

/**
 * @description worksセクションのギャラリーリストのループアニメーションのTimelineを生成する。
 * - DOM取得は行わない。
 *
 * @param {HTMLElement} galleryEl - ギャラリーリスト用のDOM要素
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 */
const createWorksGalleryLoopTimeline = (
  galleryEl: HTMLElement,
): GSAPTimeline => {
  //ダミー用の要素も含め2倍の長さになので元の幅に戻すため /2
  const totalWidth = galleryEl.scrollWidth / 2;

  const tl = gsap.timeline();

  tl.to(galleryEl, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
  });

  return tl;
};

export default createWorksGalleryLoopTimeline;
