/**
 * @description 初回ロードかチェックし、それに応じたクラスを付与する。
 */
const checkFirstVisit = () => {
  const body = document.body;
  const loader: HTMLElement | null = document.getElementById("loader");

  if (!loader) return;

  if (!sessionStorage.getItem("hasVisited")) {
    //初回ロード時
    body.classList.add("overflow-y-hidden");
    loader.classList.add("fs-loading");
  } else {
    //２回目以降
    loader.classList.add("loading");
  }
};

export default checkFirstVisit;
