import { gsap } from "gsap";

const closeMenu = ({
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
    menuEl.classList.add("invisible");
    menuEl.classList.remove("is-open", "visible");
  })
    .to(flipEl, {
      xPercent: 50,
      yPercent: -50,
      duration: 0.6,
      ease: "power4.in",
    })
    .add(() => {
      buttonEl.classList.remove("is-open");
    });

  return tl;
};

export default closeMenu;
