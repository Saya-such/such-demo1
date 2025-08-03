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
          } else if (window.scrollY < serviceEl.getBoundingClientRect().top) {
            rootEl.dataset.color = "light";
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
        } else if (entry.intersectionRatio > 0.3) {
          rootEl.dataset.color = "dark";
        }
      },
      { threshold: [0, 0.3] },
    );
  });

  newsObserver.observe(newsEl);
};

export default initColorMode;
