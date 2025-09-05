import enableCursorEffect from "@/libs/enableCursorEffect";

const enableCompanyCursor = () => {
  const link = document.querySelector(".company-container");

  if (link) {
    enableCursorEffect(link as HTMLElement);
  }
};

export default enableCompanyCursor;
