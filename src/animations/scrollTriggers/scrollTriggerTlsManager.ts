import type { CreateTlFn } from "@/types/CreateTlFn";

const createScrollTriggerTlFns = new Set<CreateTlFn>();
const scrollTriggerTls = new Set<GSAPTimeline>();

export const addCreateScrollTriggerTlFns = (fn: CreateTlFn) => {
  createScrollTriggerTlFns.add(fn);
};

export const runAllScrollTriggerTls = () => {
  // catchAnimationが初回呼び出されたタイミングでのみ実行できれば良いので不要　※この関数を再利用するようであればコメントアウト解除！
  // scrollTriggerTls.forEach((tl) => {
  //   tl.kill();
  // });
  // scrollTriggerTls.clear();

  createScrollTriggerTlFns.forEach((fn) => {
    const tl = fn();
    if (tl) {
      scrollTriggerTls.add(tl);
    }
  });
};
