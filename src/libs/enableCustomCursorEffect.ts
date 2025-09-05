import createCustomCursorTl from "@/components/CustomCursor/createCustomCursorTl";

const enableCustomCursorEffect = (link: HTMLElement) => {
  const tl = createCustomCursorTl();

  link.addEventListener("mouseenter", () => {
    tl.play();
  });

  link.addEventListener("mouseleave", () => {
    tl.reverse();
  });
};

export default enableCustomCursorEffect;
