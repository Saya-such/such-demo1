/**
 * @description スマホ閲覧時に対象のDOM要素elの高さをビューポートの高さに設定する。
 *
 * @param {HTMLElement} el - 対象のDOM要素
 * @returns {void}
 */
const setupElementHeight = (el: HTMLElement): void => {
  if (
    window.matchMedia("(orientation: portrait) and (max-width: 640px)").matches
  )
    el.style.height = `${window.innerHeight}px`;
};

export default setupElementHeight;
