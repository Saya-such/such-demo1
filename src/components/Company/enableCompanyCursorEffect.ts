import enableCursorEffect from "@/libs/enableCursorEffect";

/**
 * companyセクションにて追従カーソル表示処理
 * 対象範囲となるDOM要素を取得しenableCursorEffectに渡して実行するのみ。
 */
const enableCompanyCursorEffect = () => {
  const link: HTMLElement | null = document.querySelector(".company-container");

  if (!link) return;
  enableCursorEffect(link);
};

export default enableCompanyCursorEffect;
