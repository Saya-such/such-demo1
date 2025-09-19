import createCursorFadeInTimeline from "@/components/Cursor/createCursorFadeInTimeline";
import createCursorFadeOutTimeline from "@/components/Cursor/createCursorFadeOutTimeline";
import createCursorQuickToFn from "@/components/Cursor/createCursorQuickToFn";

/**
 * @description 対象の要素に追従カーソルのエフェクトを付与する。
 * - マウスホバー時にカーソルをフェードイン/フェードアウトさせる。
 * - マウス移動時にカーソル位置を追従させる。
 * - hover可能かつpointer: fineの環境（PCマウス操作など）でのみ有効。
 *
 * @param {HTMLElement} link - エフェクトを適用する対象のDOM要素
 * @returns {void}
 */
const enableCursorEffect = (link: HTMLElement): void => {
  const cursor: HTMLElement | null = document.querySelector(".custom-cursor");

  if (
    !cursor ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
    return;

  let isHover = false;
  let fadeInOutTl: GSAPTimeline | null = null;
  //cursorの位置をマウスカーソルの位置に更新する関数を格納
  const quickToFns = createCursorQuickToFn(cursor);

  link.addEventListener("mouseenter", (e) => {
    isHover = true;
    fadeInOutTl?.kill();
    //cursorのフェードインアニメーション
    fadeInOutTl = createCursorFadeInTimeline(cursor, e);
  });

  link.addEventListener("mouseleave", () => {
    isHover = false;
    fadeInOutTl?.kill();
    //cursorのフェードアウトアニメーション
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
