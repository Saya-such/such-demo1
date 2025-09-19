import { gsap } from "gsap";

/**
 * @description mousemoveイベントを受け取り、カーソル用要素cursorを追従させる。
 * - Timelineの生成や他DOM要素の操作は行わない。
 *
 * @param {HTMLElement} cursor - カーソル用のDOM要素
 * //@returns {{ xTo: (value: number) => void, yTo: (value: number) => void }} ※自動補完によりこの型定義が出力されると分かりにくくなるためコメントアウト
 * - xTo: カーソルのX座標を更新するgsap.quickTo関数
 * - yTo: カーソルのY座標を更新するgsap.quickTo関数
 */
const createCursorQuickToFn = (cursor: HTMLElement) => {
  const xTo = gsap.quickTo(cursor, "x");
  const yTo = gsap.quickTo(cursor, "y");

  return {
    xTo,
    yTo,
  };
};

export default createCursorQuickToFn;
