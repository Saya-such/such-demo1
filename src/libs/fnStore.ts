import type { Fn } from "@/types/Fn";

const scrollTriggers = new Set<Fn>();
const timelines = new Set<GSAPTimeline>();

export const addScrollTriggerTimeline = (fn: Fn) => {
  scrollTriggers.add(fn);
};

export const runAllScrollTriggerTimelines = () => {
  timelines.forEach((tl) => tl.kill());
  timelines.clear();

  scrollTriggers.forEach((fn) => {
    const tl = fn();
    if (tl) {
      timelines.add(tl);
    }
  });
};
