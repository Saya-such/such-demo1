import { gsap } from "gsap";

const createMenuOpenTimeline = ({
  flipEl,
  menuEl,
  buttonEl,
}: {
  flipEl: HTMLElement;
  menuEl: HTMLElement;
  buttonEl: HTMLElement;
}) => {
  let tl = gsap.timeline();

  tl.add(() => {
    buttonEl.classList.add("is-open");
  })
    .to(flipEl, {
      xPercent: -100,
      yPercent: 50,
      duration: 0.5,
      ease: "power3.out",
    })
    .add(() => {
      menuEl.classList.remove("invisible");
      menuEl.classList.add("is-open", "visible");
    });

  return tl;
};

export default createMenuOpenTimeline;
