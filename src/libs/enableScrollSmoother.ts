import Lenis from "lenis";

/**
 * @description ページ全体に慣性スクロールの適用をする。
 */
const enableScrollSmoother = () => {
  const lenis = new Lenis();

  function raf(time: DOMHighResTimeStamp) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default enableScrollSmoother;
