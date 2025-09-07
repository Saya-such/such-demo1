import createCursorFadeInTl from "@/components/Cursor/createCursorFadeInTl";
import createCursorFadeOutTl from "@/components/Cursor/createCursorFadeOutTl";
import createCursorFollowTl from "@/components/Cursor/createCursorFollowTl";

const enableCursorEffect = (link: HTMLElement) => {
  const cursor: HTMLElement | null = document.querySelector(".custom-cursor");

  if (
    !cursor ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
    return;

  let isHover = false;
  let fadeTl: GSAPTimeline | null = null;
  const corsorFollowTl = createCursorFollowTl(cursor);

  link.addEventListener("mouseenter", (e) => {
    isHover = true;
    fadeTl?.kill();
    fadeTl = createCursorFadeInTl(cursor, e);
  });

  link.addEventListener("mouseleave", () => {
    isHover = false;
    fadeTl?.kill();
    fadeTl = createCursorFadeOutTl(cursor);
  });

  link.addEventListener("mousemove", (e) => {
    if (isHover) {
      corsorFollowTl.xTo(e.clientX);
      corsorFollowTl.yTo(e.clientY);
    }
  });
};

export default enableCursorEffect;
