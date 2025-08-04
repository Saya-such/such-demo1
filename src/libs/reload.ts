const reload = () => {
  const rootEl = document.getElementById("page-root");
  let initialWidth = window.innerWidth;

  if (rootEl) {
    rootEl.dataset.color = "light";
  }

  window.addEventListener("resize", () => {
    if (initialWidth !== window.innerWidth) {
      window.location.reload();
    }
  });
};

export default reload;
