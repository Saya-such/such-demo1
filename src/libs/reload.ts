const reload = () => {
  let initialWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    if (initialWidth !== window.innerWidth) {
      window.location.reload();
    }
  });
};

export default reload;
