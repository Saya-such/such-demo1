import type SwiperType from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import createHeroSwiper from "./createHeroSwiper";

gsap.registerPlugin(ScrollTrigger);

/**
 * スライダー用要素の表示・非表示管理。
 * - スクロールにて対象要素が画面外に出たときにパフォーマンスを考え、スライダーを停止させる処理。
 * ※Swiperインスタンスの削除と再生成の管理を行う。
 */
const manageHeroSwiper = () => {
  const trigger: HTMLElement | null = document.getElementById("hero");
  const sliderEl: HTMLElement | null = document.getElementById("hero-slider");
  let heroSwiper: SwiperType | null = null;

  if (!trigger || !sliderEl) return;

  //Swiperインスタンスを生成し表示
  const showSlider = () => {
    if (!heroSwiper) {
      heroSwiper = createHeroSwiper(sliderEl);
      sliderEl.style.visibility = "visible";
    }
  };

  //Swiperインスタンスを削除し非表示に
  const hideSlider = () => {
    if (heroSwiper) {
      heroSwiper.destroy(true, true);
      sliderEl.style.visibility = "hidden";
      heroSwiper = null;
    }
  };

  gsap.timeline({
    scrollTrigger: {
      trigger,
      id: "hero",
      start: "top bottom",
      end: "bottom top",
      onEnter: showSlider,
      onLeave: hideSlider,
      onEnterBack: showSlider,
    },
  });
};

export default manageHeroSwiper;
