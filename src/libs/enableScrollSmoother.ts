import Lenis from "lenis";

const enableScrollSmoother = () => {
  const lenis = new Lenis();

  function raf(time: DOMHighResTimeStamp) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default enableScrollSmoother;
