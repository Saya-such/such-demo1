import { animateGradients } from "./animateGradients";
import { gsap } from "gsap";

const animation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const body = document.body;
    const loaderCatch = ".loader-catch";
    const heroCatch = ".hero-catch";

    if (loader?.classList.contains("fs-loading")) {
      const tl = gsap.timeline();

      tl.fromTo(loaderCatch, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      animateGradients(loaderCatch, tl);

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

      tl.fromTo(
        loader,
        {
          scale: 2,
          aspectRatio: "1/cos(30deg)",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        },
        {
          xPercent: -100,
          yPercent: -100,
          duration: 0.7,
          ease: "power3.in",
        },
      ).to(loader, { duration: 0.7 });

      animateGradients(heroCatch, tl);

      tl.add(() => {
        loader?.classList.remove("loading");
        loader?.classList.add("-z-10000");
      }).to(loader, { opacity: 0, display: "none" });
    }
  });
};

export default animation;
