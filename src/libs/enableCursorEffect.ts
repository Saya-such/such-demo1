import createCursorFadeInTl from "@/components/Cursor/createCursorFadeInTl";
import createCursorFollowTl from "@/components/Cursor/createCursorFollowTl";

const enableCursorEffect = (link: HTMLElement) => {
  const cursor = document.querySelector(".custom-cursor");

  if (
    !cursor ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
    return;

  const corsorFadeInTl = createCursorFadeInTl(cursor as HTMLElement);
  const corsorFollowTl = createCursorFollowTl(cursor as HTMLElement);

  let isHover = false;

  link.addEventListener("mouseenter", () => {
    isHover = true;
    corsorFadeInTl.play();
  });

  link.addEventListener("mouseleave", () => {
    isHover = false;
    corsorFadeInTl.reverse();
  });

  link.addEventListener("mousemove", (e) => {
    if (isHover) {
      corsorFollowTl.xTo(e.clientX);
      corsorFollowTl.yTo(e.clientY);
    }
  });
};

export default enableCursorEffect;
