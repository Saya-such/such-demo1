import { startTextGradientAnimation } from "@/animations/common/startTextGradientAnimation";
import startPageFlipAnimation from "@/animations/common/startPageFlipAnimation";
import { gsap } from "gsap";

const startLoaderAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const body = document.body;
    const loaderCatch = ".loader-catch";
    const heroCatch = ".hero-catch";

    if (loader?.classList.contains("fs-loading")) {
      const tl = gsap.timeline();

      tl.fromTo(loaderCatch, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      startTextGradientAnimation({ selector: loaderCatch, tl });

      tl.add(() => {
        body.classList.remove("overflow-y-hidden");
      })
        .to(loader, { opacity: 0, duration: 0.3, delay: 0.3, display: "none" })
        .add(() => {
          loader?.classList.remove("fs-loading");
          loader?.classList.add("-z-10000");
          sessionStorage.setItem("hasVisited", "true");
        });
    } else if (loader?.classList.contains("loading")) {
      const tl = gsap.timeline();

      startPageFlipAnimation(loader, tl);

      tl.to(loader, { duration: 0.7 });

      startTextGradientAnimation({ selector: heroCatch, tl });

      tl.add(() => {
        loader?.classList.remove("loading");
        loader?.classList.add("-z-10000");
      }).to(loader, { opacity: 0, display: "none" });
    }
  });
};

export default startLoaderAnimation;
