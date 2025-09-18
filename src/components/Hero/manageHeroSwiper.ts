import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type SwiperType from "swiper";
import createHeroSwiper from "./createHeroSwiper";

gsap.registerPlugin(ScrollTrigger);

const manageHeroSwiper = () => {
  const trigger: HTMLElement | null = document.getElementById("hero");
  const sliderEl: HTMLElement | null = document.getElementById("hero-slider");
  let heroSwiper: SwiperType | null = null;

  if (!trigger || !sliderEl) return;

  const showSlider = () => {
    if (!heroSwiper) {
      heroSwiper = createHeroSwiper(sliderEl);
      sliderEl.style.visibility = "visible";
    }
  };

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
