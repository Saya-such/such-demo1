import createCursorFadeInTimeline from "@/components/Cursor/createCursorFadeInTimeline";
import createCursorFadeOutTimeline from "@/components/Cursor/createCursorFadeOutTimeline";
import createCursorQuickToFn from "@/components/Cursor/createCursorQuickToFn";

const enableCursorEffect = (link: HTMLElement) => {
  const cursor: HTMLElement | null = document.querySelector(".custom-cursor");

  if (
    !cursor ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
    return;

  let isHover = false;
  let fadeInOutTl: GSAPTimeline | null = null;
  const quickToFns = createCursorQuickToFn(cursor);

  link.addEventListener("mouseenter", (e) => {
    isHover = true;
    fadeInOutTl?.kill();
    fadeInOutTl = createCursorFadeInTimeline(cursor, e);
  });

  link.addEventListener("mouseleave", () => {
    isHover = false;
    fadeInOutTl?.kill();
    fadeInOutTl = createCursorFadeOutTimeline(cursor);
  });

  link.addEventListener("mousemove", (e) => {
    if (isHover) {
      quickToFns.xTo(e.clientX);
      quickToFns.yTo(e.clientY);
    }
  });
};

export default enableCursorEffect;
