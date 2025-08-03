import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initNewsColorChange = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rootEl = document.getElementById("page-root");
  const trigger = document.getElementById("news");

  if (!rootEl || !trigger) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      onEnter: () => {
        rootEl.dataset.color = "light";
      },
    },
  });

  return tl;
};

export default initNewsColorChange;
