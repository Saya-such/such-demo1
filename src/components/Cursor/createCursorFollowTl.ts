import { gsap } from "gsap";

const createCursorFollowTl = (cursor: HTMLElement) => {
  const xTo = gsap.quickTo(cursor, "x", { duration: 0.2 });
  const yTo = gsap.quickTo(cursor, "y", { duration: 0.2 });

  return {
    xTo,
    yTo,
  };
};

export default createCursorFollowTl;
