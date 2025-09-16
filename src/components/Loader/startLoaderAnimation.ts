import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import createPageFlipTimeline from "@/animations/common/createPageFlipTimeline";
import { gsap } from "gsap";

const startLoaderAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const loaderEl: HTMLElement | null = document.getElementById("loader");
    const body = document.body;
    const loaderCatchEl: HTMLElement | null =
      document.querySelector(".loader-catch");
    const heroCatchEl: HTMLElement | null =
      document.querySelector(".hero-catch");

    if (!loaderEl || !loaderCatchEl || !heroCatchEl) return;

    if (loaderEl.classList.contains("fs-loading")) {
      const tl = gsap.timeline();

      tl.fromTo(loaderCatchEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      createTextGradientTimeline({ selector: loaderCatchEl, tl });

      tl.add(() => {
        body.classList.remove("overflow-y-hidden");
      })
        .to(loaderEl, {
          opacity: 0,
          duration: 0.3,
          delay: 0.3,
          display: "none",
        })
        .add(() => {
          loaderEl.classList.remove("fs-loading");
          loaderEl.classList.add("-z-10000");
          sessionStorage.setItem("hasVisited", "true");
        });
    } else if (loaderEl.classList.contains("loading")) {
      const tl = gsap.timeline();

      createPageFlipTimeline(loaderEl, tl);

      tl.to(loaderEl, { duration: 0.7 });

      createTextGradientTimeline({ selector: heroCatchEl, tl });

      tl.add(() => {
        loaderEl.classList.remove("loading");
        loaderEl.classList.add("-z-10000");
      }).to(loaderEl, { opacity: 0, display: "none" });
    }
  });
};

export default startLoaderAnimation;
