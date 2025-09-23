import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const setupOffsetY = (target: HTMLElement, link: HTMLElement) => {
  let offsetY = 0;
  if (link.getAttribute("href") === "#company") {
    offsetY = -target.clientHeight * 0.3;
  }
  return offsetY;
};

const startMenuClickHandler = (e: MouseEvent) => {
  const link = (e.target as HTMLElement).closest("a");
  if (!link) return;

  const target = document.querySelector(link.getAttribute("href") || "");
  if (!target) return;

  const offsetY = setupOffsetY(target as HTMLElement, link);
  console.log(offsetY);

  gsap.to(window, {
    scrollTo: { y: target, offsetY },
    duration: 1,
    ease: "power2.out",
  });
};

export default startMenuClickHandler;
