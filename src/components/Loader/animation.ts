import { gsap } from "gsap";

const animation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const body = document.body;
    if (loader?.classList.contains("fs-loading")) {
      const tl = gsap.timeline();
      tl.fromTo(".loader-catch", { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(58, 129, 180, 1) 0%, rgba(255, 255, 255, 1) 15%, rgba(252, 176, 69, 1) 30%, rgba(211, 39, 81, 1) 50%, rgba(131, 58, 180, 1) 90%, rgba(58, 129, 180, 1) 100%)",
          duration: 0.1,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(131, 58, 180, 1) 0%, rgba(58, 129, 180, 1) 10%, rgba(255, 255, 255, 1) 25%, rgba(252, 176, 69, 1) 40%, rgba(211, 39, 81, 1) 60%, rgba(131, 58, 180, 1) 100%)",
          duration: 0.08,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(131, 58, 180, 1) 0%, rgba(58, 129, 180, 1) 20%, rgba(255, 255, 255, 1) 45%, rgba(252, 176, 69, 1) 60%, rgba(211, 39, 81, 1) 80%, rgba(131, 58, 180, 1) 100%)",
          duration: 0.08,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(131, 58, 180, 1) 0%, rgba(58, 129, 180, 1) 20%, rgba(255, 255, 255, 1) 45%, rgba(252, 176, 69, 1) 60%, rgba(211, 39, 81, 1) 80%, rgba(131, 58, 180, 1) 100%)",
          duration: 0.03,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(211, 39, 81, 1) 0%, rgba(131, 58, 180, 1) 20%, rgba(58, 129, 180, 1) 40%, rgba(255, 255, 255, 1) 65%, rgba(252, 176, 69, 1) 80%, rgba(211, 39, 81, 1) 100%)",
          duration: 0.05,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(211, 39, 81, 1) 0%, rgba(131, 58, 180, 1) 60%, rgba(58, 129, 180, 1) 78%, rgba(255, 255, 255, 1) 100%)",
          duration: 0.1,
        })
        .to(".loader-catch", {
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(150deg,rgba(0, 0, 0, 1) 50%, rgba(131, 58, 180, 1) 100%",
          duration: 0.1,
        })
        .to(".loader-catch", {
          clearProps:
            "backgroundImage,backgroundClip,WebkitBackgroundClip,WebkitTextFillColor",
          color: "black",
          duration: 0.1,
        })
        .add(() => {
          body.classList.remove("overflow-y-hidden");
        })
        .to(loader, { opacity: 0, duration: 0.3, delay: 0.3, display: "none" })
        .add(() => {
          loader?.classList.remove("fs-loading");
          loader?.classList.add("-z-10000");
          sessionStorage.setItem("hasVisited", "true");
        });
    } else if (loader?.classList.contains("loading")) {
    }
  });
};

export default animation;
