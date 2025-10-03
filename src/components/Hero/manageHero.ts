import setupElementHeight from "@/libs/setupElementHeight";
import createHeroCatchWhiteTimeline from "./createHeroCatchWhiteTimeline";

/**
 * heroセクションのライフサイクル管理
 * - DOM取得
 * - heroセクションの高さをビューポートに固定（スマホUIバー対策）
 * - heroが画面外に出た時、裏のfixed要素が見えても違和感がないよう、キャッチコピーの色を黒⇔白に切り替える（保険目的）
 */
const manageHero = () => {
  const heroEl = document.getElementById("hero");
  const catchEl = document.getElementById("hero-catch")?.querySelector("h1");

  if (!heroEl) return;

  setupElementHeight(heroEl);
  createHeroCatchWhiteTimeline(heroEl, catchEl as HTMLElement);
};

export default manageHero;
