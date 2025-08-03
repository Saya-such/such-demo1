const initColorMode = () => {
  const sectionEl = document.getElementById("service");
  const rootEl = document.getElementById("page-root");

  if (!sectionEl || !rootEl) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        const mode = entry.isIntersecting ? "dark" : "light";
        rootEl.dataset.color = mode;
      },
      { threshold: 0 },
    );
  });

  observer.observe(sectionEl);
};

export default initColorMode;
