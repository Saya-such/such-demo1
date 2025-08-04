const initColorMode = () => {
  const serviceEl = document.getElementById("service");
  const newsEl = document.getElementById("news");
  const rootEl = document.getElementById("page-root");

  if (!serviceEl || !newsEl || !rootEl) return;

  const isSp = window.matchMedia("(max-width: 799px)").matches;

  const isPortrait = window.matchMedia(
    "(orientation: portrait) and (min-width: 800px)",
  ).matches;

  const serviceObserver = new IntersectionObserver(
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

  serviceObserver.observe(serviceEl);
};

export default initColorMode;
