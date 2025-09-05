const reload = () => {
  history.scrollRestoration = "manual";
  let width = window.innerWidth;

  window.addEventListener("resize", () => {
    if (width === window.innerWidth) {
      return;
    } else {
      width = window.innerWidth;
      window.location.reload();
    }
  });

  window.addEventListener("pageshow", () => window.scrollTo(0, 0));
};

export default reload;
