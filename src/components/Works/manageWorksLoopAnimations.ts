import { gsap } from "gsap";
import createWorksGalleryLoopTimeline from "./createWorksGalleryLoopTimeline";
import createWorksTextLoopTimeline from "./createWorksTextLoopTimeline";

/**
 * worksセクションのループアニメーションの制御。
 * - DOM取得
 * - IntersectionObserverでworksセクションの表示状態を監視。
 * - 表示されたらTimelineの生成・画面外に出たらTimelineを削除し位置をリセットする。
 */
const manageWorksLoopAnimations = () => {
  const sectionEl = document.getElementById("works");
  const galleryEl = document.getElementById("works-list");
  const textEl = document.getElementById("loop-text");

  if (!sectionEl || !galleryEl || !textEl) return;

  //ギャラリーリストのループアニメーションのTimeline用
  let galleryLoopTl: GSAPTimeline | null = null;
  //テキストのループアニメーションのTimeline用
  let textLoopTl: GSAPTimeline | null = null;

  //ループアニメーションのTimelineをすべて削除
  const stopAnimations = () => {
    galleryLoopTl?.kill();
    //再生成時にアニメーション位置をリセット
    gsap.set(galleryEl, { x: 0 });
    galleryLoopTl = null;

    textLoopTl?.kill();
    //再生成時にアニメーション位置をリセット
    gsap.set(textEl, { x: 0 });
    textLoopTl = null;
  };

  //worksセクションが表示されているか判定
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          if (!galleryLoopTl) {
            //ギャラリーリストのループアニメーション開始
            galleryLoopTl = createWorksGalleryLoopTimeline(galleryEl);
          }
          if (!textLoopTl) {
            //テキストのループアニメーション開始
            textLoopTl = createWorksTextLoopTimeline(textEl);
          }
        } else {
          //Timelineの削除
          stopAnimations();
        }
      },
      { threshold: 0 },
    );
  });

  observer.observe(sectionEl);
};

export default manageWorksLoopAnimations;
