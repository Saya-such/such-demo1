import enableCursorEffect from "@/libs/enableCursorEffect";

const enableCompanyCursorEffect = () => {
  const link: HTMLElement | null = document.querySelector(".company-container");

  if (!link) return;
  enableCursorEffect(link);
};

export default enableCompanyCursorEffect;
