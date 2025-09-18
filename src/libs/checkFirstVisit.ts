const checkFirstVisit = () => {
  const body = document.body;
  const loader: HTMLElement | null = document.getElementById("loader");

  if (!loader) return;

  if (!sessionStorage.getItem("hasVisited")) {
    body.classList.add("overflow-y-hidden");
    loader.classList.add("fs-loading");
  } else {
    loader.classList.add("loading");
  }
};

export default checkFirstVisit;
