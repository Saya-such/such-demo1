import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * companyセクションが表示された際にロゴとメニューの色を白にするScrollTriggerのTimelineを生成する。
 * - DOM取得 → Timeline生成 → 配列で返却
 * - resetScrollTriggerTimelinesによって一括再生成される。
 */
const headerScrollTriggerTimeline = (): GSAPTimeline[] => {
  const trigger = document.getElementById("company");
  const menuLinks = document.querySelectorAll("#menu a");
  const blackLogo = document.querySelector<HTMLElement>("#logo .logo-bl");
  const whiteLogo = document.querySelector<HTMLElement>("#logo .logo-white");

  let timelines: GSAPTimeline[] = [];

  if (!trigger || !blackLogo || !whiteLogo) return timelines;

  //要素(el - ロゴのDOM要素)の表示・非表示
  const toggleVisibility = (el: HTMLElement, visible: boolean) => {
    el.classList.toggle("visible", visible);
    el.classList.toggle("invisible", !visible);
  };

  //白いロゴの表示
  const showWhiteLogo = () => {
    toggleVisibility(blackLogo, false);
    toggleVisibility(whiteLogo, true);
  };

  //黒いロゴの表示
  const showBlackLogo = () => {
    toggleVisibility(whiteLogo, false);
    toggleVisibility(blackLogo, true);
  };

  if (window.matchMedia("(min-width: 1024px)").matches) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        id: "menu-color",
        start: "top top",
        end: "bottom+=10% bottom",
        toggleClass: { targets: menuLinks, className: "text-white" },
        onEnter: showWhiteLogo,
        onLeave: showBlackLogo,
        onEnterBack: showWhiteLogo,
        onLeaveBack: showBlackLogo,
      },
    });

    timelines.push(tl);
  }

  return timelines;
};

export default headerScrollTriggerTimeline;
