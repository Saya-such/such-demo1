import { createTextGradientTimeline } from "@/animations/common/createTextGradientTimeline";
import createPageFlipTimeline from "@/animations/common/createPageFlipTimeline";
import { gsap } from "gsap";

/**
 * @description ローディングアニメーション後、Loader要素を非表示にし、Hero要素の表示へ繋げる。
 * Timeline生成のみで、DOM要素の取得やイベントリスナー登録は行わない。
 *
 * @param {Object} params - アニメーション設定オブジェクト
 * @param {HTMLElement} params.loaderEl - Loader全体のDOM要素
 * @param {HTMLElement} params.loaderCatchEl - Loaderエリアのキャッチコピー用要素
 * @param {HTMLElement} params.heroCatchEl - Heroエリアのキャッチコピー用要素
 * @returns {GSAPTimeline | void} GSAPTimelineインスタンス
 *
 * @remarks
 * - 初回ロード時とリロード時で別のアニメーションが実行される。
 */
const createLoaderTimeline = ({
  loaderEl,
  loaderCatchEl,
  heroCatchEl,
}: {
  loaderEl: HTMLElement;
  loaderCatchEl: HTMLElement;
  heroCatchEl: HTMLElement;
}): GSAPTimeline | void => {
  if (loaderEl.classList.contains("fs-loading")) {
    //初回ロード時の処理
    const tl = gsap.timeline();

    //loader上のキャッチコピーの表示
    tl.fromTo(loaderCatchEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });

    //キャッチコピーのグラデーションアニメーション
    createTextGradientTimeline({ selector: loaderCatchEl, tl });

    //loader非表示
    tl.add(() => {
      document.body.classList.remove("overflow-y-hidden");
    })
      .to(loaderEl, {
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        display: "none",
      })
      .add(() => {
        loaderEl.classList.remove("fs-loading");
        loaderEl.classList.add("-z-10000");
        //初回ロード判別フラグをオフに
        sessionStorage.setItem("hasVisited", "true");
      });
    return tl;
  } else if (loaderEl.classList.contains("loading")) {
    //リロード時の処理
    const tl = gsap.timeline();

    //メディアサイズに固定されたloader要素にページめくりアニメーション
    createPageFlipTimeline(loaderEl, tl);

    tl.to(loaderEl, { duration: 0.7 });

    //heroセクションのキャッチコピーのグラデーションアニメーション
    createTextGradientTimeline({ selector: heroCatchEl, tl });

    //loader非表示
    tl.add(() => {
      loaderEl.classList.remove("loading");
      loaderEl.classList.add("-z-10000");
    }).to(loaderEl, { opacity: 0, display: "none" });
    return tl;
  }
};

export default createLoaderTimeline;
