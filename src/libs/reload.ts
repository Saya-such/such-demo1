const reload = () => {
  const rootEl = document.getElementById("page-root");
  let initialWidth = window.innerWidth;
  console.log("reloaded");

  if (rootEl) {
    rootEl.dataset.color = "light";
    console.log("call reloaded set light");
  }

  window.addEventListener("resize", () => {
    if (initialWidth !== window.innerWidth) {
      window.location.reload();
      console.log("resize");
    }
  });
};

export default reload;
