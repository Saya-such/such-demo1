const setupColorMode = () => {
  const rootEl = document.getElementById("page-root");
  const targetEl = document.getElementById("service");

  if (!rootEl || !targetEl) return;

  const isPortrait = window.matchMedia(
    "(orientation: portrait) and (min-width: 800px)",
  ).matches;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!isPortrait) {
          if (entry.isIntersecting) {
            if ((entry.intersectionRatio >= 0, entry.intersectionRatio < 0.3)) {
              rootEl.dataset.color = "light";
            } else {
              rootEl.dataset.color = "dark";
            }
          } else {
            rootEl.dataset.color = "light";
          }
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
