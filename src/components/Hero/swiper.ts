import Swiper from "swiper";
import "swiper/css/bundle";
import { Autoplay, EffectFade } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay, EffectFade],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});
