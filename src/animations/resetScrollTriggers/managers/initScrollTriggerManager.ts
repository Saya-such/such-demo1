import type { CreateTimelinesFn } from "@/types/CreateTimelinesFn";

const createScrollTriggerFns = new Set<CreateTimelinesFn>();
const scrollTriggerTls = new Set<GSAPTimeline>();

export const addScrollTriggerFns = (fn: CreateTimelinesFn) => {
  createScrollTriggerFns.add(fn);
};

export const runAllScrollTriggers = () => {
  // catchAnimationが初回呼び出されたタイミングでのみ実行できれば良いので不要　※この関数を再利用するようであればコメントアウト解除！
  // scrollTriggerTls.forEach((tl) => {
  //   tl.kill();
  // });
  // scrollTriggerTls.clear();

  createScrollTriggerFns.forEach((fn) => {
    const tl = fn();
    if (tl) {
      scrollTriggerTls.add(tl);
    }
  });
};
