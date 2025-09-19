import type { ScrollTimelineCreators } from "@/types/ScrollTimelineCreators";

const scrollTimelineCreators = new Set<ScrollTimelineCreators>();
const scrollTimelines = new Set<GSAPTimeline>();

/**
 * @description Timeline再生成用のコレクション(scrollTimelineCreators)に関数を追加する。
 *
 * @param {ScrollTimelineCreators} fn - 登録するTimeline生成関数
 */
export const addResetTimelineCreators = (fn: ScrollTimelineCreators) => {
  scrollTimelineCreators.add(fn);
};

/**
 * @description Timeline再生成用コレクションに追加した関数を全て実行し、返却されたTimeline(GSAPTimeline[])を展開しTimelineの再生成を行う。
 *
 * @remarks
 * -Timeline再生成前に削除処理が必要な場合は、コメントアウトを解除すること
 */
export const createAllScrollTimelines = () => {
  //startConceptCatchAnimationが初回呼び出されたタイミングでのみ実行できれば良いので不要　※この関数を再利用するようであればコメントアウト解除！
  // scrollTimelines.forEach((tl) => {
  //   tl.kill();
  // });
  // scrollTimelines.clear();

  scrollTimelineCreators.forEach((fn) => {
    const result = fn();
    if (result) {
      result.forEach((tl) => scrollTimelines.add(tl));
    }
  });
};
