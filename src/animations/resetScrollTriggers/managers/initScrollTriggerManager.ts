import type { ScrollTimelineCreators } from "@/types/ScrollTimelineCreators";

const scrollTimelineCreators = new Set<ScrollTimelineCreators>();
const scrollTimelines = new Set<GSAPTimeline>();

export const addResetTimelineCreators = (fn: ScrollTimelineCreators) => {
  scrollTimelineCreators.add(fn);
};

export const createAllScrollTimelines = () => {
  // startConceptCatchAnimationが初回呼び出されたタイミングでのみ実行できれば良いので不要　※この関数を再利用するようであればコメントアウト解除！
  // scrollTimelines.forEach((tl) => {
  //   tl.kill();
  // });
  // scrollTimelines.clear();

  scrollTimelineCreators.forEach((fn) => {
    const result = fn();
    if (result) {
      result.forEach((timeline) => scrollTimelines.add(timeline));
    }
  });
};
