/**
 * @description dataset.colorを更新する。
 * - DOM取得 → serviceセクションをIntersectionObserverで監視 → 画面内に入ったときにdataset.colorを更新する。
 */
const setupColorMode = () => {
  const rootEl = document.getElementById("page-root");
  const targetEl = document.getElementById("service");

  if (
    !rootEl ||
    !targetEl ||
    window.matchMedia("(orientation: portrait) and (min-width: 800px)").matches
  )
    return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if ((entry.intersectionRatio >= 0, entry.intersectionRatio < 0.3)) {
            rootEl.dataset.color = "light";
          } else {
            rootEl.dataset.color = "dark";
          }
        } else {
          rootEl.dataset.color = "light";
        }
      });
    },
    {
      rootMargin: "0px 0px 50% 0px",
      threshold: [0, 0.3],
    },
  );

  observer.observe(targetEl);
};

export default setupColorMode;
