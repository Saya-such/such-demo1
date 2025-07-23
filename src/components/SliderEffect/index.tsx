import { gsap } from "gsap";
import pageFlipAnimation from "@/libs/pageFlipAnimation";

const tl = gsap.timeline();

const SliderEffect = () => {
  const swiperEl = document.querySelector("swiper");
  swiperEl?.addEventListener("slidechange", () => {
    pageFlipAnimation(".swiper-bg", tl);
    console.log("slidechange");
  });
};

export default SliderEffect;
