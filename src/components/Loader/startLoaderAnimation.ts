import createLoaderTimeline from "./createLoaderTimeline";

/**
 * @description DOM読み込み完了時にローディングアニメーションを開始する
 */
const startLoaderAnimation = () => {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const loaderEl: HTMLElement | null = document.getElementById("loader");
      const loaderCatchEl: HTMLElement | null =
        document.getElementById("loader-catch");
      const heroCatchEl: HTMLElement | null =
        document.getElementById("hero-catch");

      if (!loaderEl || !loaderCatchEl || !heroCatchEl) return;

      //ローディングアニメーション実行
      createLoaderTimeline({ loaderEl, loaderCatchEl, heroCatchEl });
    },
    //イベントの重複登録を防ぐため1回のみ実行
    { once: true },
  );
};

export default startLoaderAnimation;
