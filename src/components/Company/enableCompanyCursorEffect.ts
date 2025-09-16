import enableCursorEffect from "@/libs/enableCursorEffect";

const enableCompanyCursorEffect = () => {
  const link = document.querySelector(".company-container");

  if (link) {
    enableCursorEffect(link as HTMLElement);
  }
};

export default enableCompanyCursorEffect;
