import Lenis from "lenis";

const scrollSmoother = () => {
  const lenis = new Lenis();

  function raf(time: DOMHighResTimeStamp) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default scrollSmoother;
