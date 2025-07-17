import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Parallax, Navigation } from "swiper/modules";

const initSwiper = () => {
  new Swiper(".swiper", {
    modules: [Autoplay, Parallax, Navigation],
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    loop: true,
    speed: 600,
  });
};

export default initSwiper;
