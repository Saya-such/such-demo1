const initColorMode = () => {
  const serviceEl = document.getElementById("service");
  const newsEl = document.getElementById("news");
  const rootEl = document.getElementById("page-root");

  if (!serviceEl || !newsEl || !rootEl) return;

  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          rootEl.dataset.color = "dark";
        } else {
          if (entry.intersectionRatio <= 0.3 || !entry.isIntersecting) {
            rootEl.dataset.color = "light";
            console.log(
              "called serviceObserver: entry.intersectionRatio <= 0.3 || !entry.isIntersecting",
            );
          } else if (
            window.scrollY <
            serviceEl.getBoundingClientRect().top + window.scrollY
          ) {
            rootEl.dataset.color = "light";
            console.log(
              "called serviceObserver: window.scrollY < serviceEl.getBoundingClientRect().top",
            );
          }
        }
      },

      { threshold: [0, 0.3] },
    );
  });

  serviceObserver.observe(serviceEl);

  const newsObserver = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          rootEl.dataset.color = "light";
          console.log("called newsCbserver: entry.isIntersecting");
        } else if (entry.intersectionRatio > 0.3) {
          rootEl.dataset.color = "dark";
          console.log("called newsObserver: entry.intersectionRatio > 0.3");
        }
      },
      { threshold: [0, 0.3] },
    );
  });

  newsObserver.observe(newsEl);
};

export default initColorMode;
