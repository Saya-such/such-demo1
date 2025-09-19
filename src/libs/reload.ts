const reload = () => {
  //pageshowにてスクロール位置を操作するため、手動で管理
  history.scrollRestoration = "manual";
  let width = window.innerWidth;

  //リサイズ時にリロード処理
  window.addEventListener("resize", () => {
    if (width === window.innerWidth) return;
    width = window.innerWidth;
    window.location.reload();
  });

  //端末の向きが変化した時にリロード処理
  window.addEventListener("orientationchange", () => {
    window.location.reload();
  });

  //ページ表示でスクロール位置をトップに戻す
  window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
  });
};

export default reload;
