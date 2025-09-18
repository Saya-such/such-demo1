import Swiper from "swiper";
import "swiper/css/bundle";
import { Autoplay, EffectFade } from "swiper/modules";
import { gsap } from "gsap";

const createHeroSwiper = (selector: HTMLElement) => {
  const slidesCount = selector.querySelectorAll(".swiper-slide").length;

  return new Swiper(selector, {
    modules: [Autoplay, EffectFade],
    loop: slidesCount > 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    effect: "fade",
    on: {
      slideChange() {
        gsap.timeline().fromTo(
          ".swiper-bg",
          {
            opacity: 1,
            scale: 2,
            aspectRatio: "1/cos(30deg)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            xPercent: 0,
            yPercent: 0,
          },
          {
            opacity: 0.5,
            xPercent: -100,
            yPercent: -100,
            duration: 0.5,
            ease: "power3.in",
          },
        );
      },
    },
  });
};

export default createHeroSwiper;
