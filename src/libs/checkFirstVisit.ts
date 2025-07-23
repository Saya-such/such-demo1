const checkFirstVisit = () => {
  const body = document.body;
  const loader = document.getElementById("loader");
  if (!sessionStorage.getItem("hasVisited")) {
    body.classList.add("overflow-y-hidden");
    loader?.classList.add("fs-loading");
  } else {
    loader?.classList.add("loading");
  }
};

export default checkFirstVisit;
