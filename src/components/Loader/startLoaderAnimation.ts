import createLoaderTimeline from "./createLoaderTimeline";

const startLoaderAnimation = () => {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const loaderEl: HTMLElement | null = document.getElementById("loader");
      const loaderCatchEl: HTMLElement | null =
        document.querySelector(".loader-catch");
      const heroCatchEl: HTMLElement | null =
        document.querySelector(".hero-catch");

      if (!loaderEl || !loaderCatchEl || !heroCatchEl) return;

      createLoaderTimeline({ loaderEl, loaderCatchEl, heroCatchEl });
    },
    //イベントの登録は1回だけにする
    { once: true },
  );
};

export default startLoaderAnimation;
