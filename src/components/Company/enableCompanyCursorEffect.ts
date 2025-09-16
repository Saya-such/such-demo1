import enableCursorEffect from "@/libs/enableCursorEffect";

const enableCompanyCursorEffect = () => {
  const link: HTMLElement | null = document.querySelector(".company-container");

  if (link) {
    enableCursorEffect(link);
  }
};

export default enableCompanyCursorEffect;
