import createMenuOpenTimeline from "./createMenuOpenTimeline";
import createMenuBgTextTimelines from "./createMenuBgTextTimelines";
import createMenuCloseTimeline from "./createMenuCloseTimeline";

/**
 * メニュー開閉時のアニメーションの制御。
 * - DOM取得 → クリックイベントでTimeline生成もしくは削除
 * - createMenuBgTextTimelinesでは初期状態では非表示の要素(メニュー背景のテキスト)を含むため内部でDOM要素を取得
 */
const manageMenuAnimations = () => {
  const buttonEl: HTMLElement | null = document.getElementById("menu-button");
  const menuEl: HTMLElement | null = document.getElementById("sp-menu");
  const flipEl: HTMLElement | null = document.getElementById("menu-flip");

  if (!buttonEl || !menuEl || !flipEl) return;

  //メニュー開閉時のTimelineを扱う変数
  let menuTimeline: GSAPTimeline | null = null;
  //メニュー背景のテキストアニメーションのTimelineを扱う変数
  let bgTextTimelines: GSAPTimeline[] = [];

  buttonEl.addEventListener("click", () => {
    //メニューボタンクリックにて一度メニューに関するすべてのTimelineを削除
    menuTimeline?.kill();
    bgTextTimelines.forEach((tl) => {
      tl.kill();
    });
    menuTimeline = null;
    bgTextTimelines = [];

    if (!buttonEl.classList.contains("is-open")) {
      //開く際のアニメーションとメニュー背景のアニメーション開始
      menuTimeline = createMenuOpenTimeline({ flipEl, menuEl, buttonEl });
      bgTextTimelines = createMenuBgTextTimelines();
    } else {
      //閉じた際のアニメーション開始
      createMenuCloseTimeline({ flipEl, menuEl, buttonEl });
    }
  });
};

export default manageMenuAnimations;
