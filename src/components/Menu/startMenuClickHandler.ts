import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

//companyセクションのみ除気状態のコンテンツの非表示及びscrub: trueの設定により、アンカーリンクにoffsetYを設ける。
const setupOffsetY = (target: HTMLElement, link: HTMLElement) => {
  let offsetY = 0;
  if (link.getAttribute("href") === "#company") {
    //companyセクションの高さ*0.3のoffsetYを設定
    offsetY = -target.clientHeight * 0.3;
  }
  return offsetY;
};

const startMenuClickHandler = (e: MouseEvent) => {
  //クリックした要素のaタグを取得
  const link = (e.target as HTMLElement).closest("a");
  if (!link) return;

  const target = document.querySelector(link.getAttribute("href") || "");
  if (!target) return;

  const offsetY = setupOffsetY(target as HTMLElement, link);

  gsap.to(window, {
    scrollTo: { y: target, offsetY },
    duration: 1,
    ease: "power2.out",
  });
};

export default startMenuClickHandler;
