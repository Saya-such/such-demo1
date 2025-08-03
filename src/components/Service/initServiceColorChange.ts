import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initServiceColorChange = () => {
  gsap.registerPlugin(ScrollTrigger);

  const rootEl = document.getElementById("page-root");
  const trigger = document.getElementById("service");

  if (!rootEl || !trigger) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top bottom",
      onEnter: () => {
        rootEl.dataset.color = "dark";
      },
    },
  });

  return tl;
};

export default initServiceColorChange;
