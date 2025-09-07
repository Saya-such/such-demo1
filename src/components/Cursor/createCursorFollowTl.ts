import { gsap } from "gsap";

const createCursorFollowTl = (cursor: HTMLElement) => {
  const xTo = gsap.quickTo(cursor, "x");
  const yTo = gsap.quickTo(cursor, "y");

  return {
    xTo,
    yTo,
  };
};

export default createCursorFollowTl;
