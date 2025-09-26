import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { gsap } from "gsap";

/**
 * @description スライダー用のDOM要素を受け取りSwiperインスタンスを生成し返却する。
 *
 * @param {HTMLElement} selector - スライダーのコンテナ要素
 * @returns {Swiper} Swiperインスタンス
 */
const createHeroSwiper = (selector: HTMLElement): Swiper => {
  const slidesCount = selector.querySelectorAll(".swiper-slide").length;

  return new Swiper(selector, {
    modules: [Autoplay, EffectFade],
    loop: slidesCount > 1,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    effect: "fade",
    on: {
      slideChange() {
        gsap
          .timeline()
          .set(".swiper-bg", {
            opacity: 1,
            scale: 2,
            aspectRatio: "1/cos(30deg)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            xPercent: 0,
            yPercent: 0,
          })
          .to(".swiper-bg", {
            opacity: 0.5,
            xPercent: -100,
            yPercent: -100,
            duration: 0.5,
            ease: "power3.in",
          });
      },
    },
  });
};

export default createHeroSwiper;
