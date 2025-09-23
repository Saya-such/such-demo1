import createMenuBgTextTimelines from "./createMenuBgTextTimelines";
import createMenuCloseTimeline from "./createMenuCloseTimeline";
import createMenuOpenTimeline from "./createMenuOpenTimeline";
import startMenuClickHandler from "./startMenuClickHandler";

/**
 * メニュー開閉時・クリック時のアニメーションの制御。
 * - DOM取得 → クリックイベントでTimeline生成もしくは削除
 * - createMenuBgTextTimelinesでは初期状態では非表示の要素(メニュー背景のテキスト)を含むため内部でDOM要素を取得
 */
const manageMenuAnimations = () => {
  const buttonEl: HTMLElement | null = document.getElementById("menu-button");
  const menuEl: HTMLElement | null = document.getElementById("sp-menu");
  const flipEl: HTMLElement | null = document.getElementById("menu-flip");
  const menuPCEl: HTMLElement | null = document.getElementById("menu");

  if (!buttonEl || !menuEl || !flipEl || !menuPCEl) return;

  //メニュー開閉時のTimelineを扱う変数
  let menuTimeline: GSAPTimeline | null = null;
  //メニュー背景のテキストアニメーションのTimelineを扱う変数
  let bgTextTimelines: GSAPTimeline[] = [];

  //メニューボタンクリックにて一度メニューに関するすべてのTimelineを削除
  const resetMenuTimelines = () => {
    menuTimeline?.kill();
    bgTextTimelines.forEach((tl) => {
      tl.kill();
    });
    menuTimeline = null;
    bgTextTimelines = [];
  };

  buttonEl.addEventListener("click", () => {
    resetMenuTimelines();

    if (!buttonEl.classList.contains("is-open")) {
      //開く際のアニメーションとメニュー背景のアニメーション開始
      menuTimeline = createMenuOpenTimeline({ flipEl, menuEl, buttonEl });
      bgTextTimelines = createMenuBgTextTimelines();
    } else {
      //閉じた際のアニメーション開始
      createMenuCloseTimeline({ flipEl, menuEl, buttonEl });
    }
  });

  menuEl.addEventListener("click", (e) => {
    resetMenuTimelines();
    startMenuClickHandler(e);
    createMenuCloseTimeline({ flipEl, menuEl, buttonEl });
  });

  menuPCEl.addEventListener("click", (e) => {
    startMenuClickHandler(e);
  });
};

export default manageMenuAnimations;
