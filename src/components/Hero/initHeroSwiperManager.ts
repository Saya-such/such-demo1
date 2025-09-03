import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type SwiperType from "swiper";
import createHeroSwiper from "./createHeroSwiper";

const initHeroSwiperManager = () => {
  const sectionEl = document.getElementById("hero");
  const heroSlider = document.getElementById("hero-slider");
  let heroSwiper: SwiperType | null = null;

  if (!sectionEl || !heroSlider) return;

  if (sectionEl && heroSlider) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        id: "hero",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          if (!heroSwiper) {
            heroSwiper = createHeroSwiper(heroSlider);
            heroSlider.style.visibility = "visible";
          }
        },
        onLeave: () => {
          if (heroSwiper) {
            heroSwiper.destroy(true, true);
            heroSlider.style.visibility = "hidden";
            heroSwiper = null;
          }
        },
        onEnterBack: () => {
          if (!heroSwiper) {
            heroSwiper = createHeroSwiper(heroSlider);
            heroSlider.style.visibility = "visible";
          }
        },
      },
    });
  }
};

export default initHeroSwiperManager;
