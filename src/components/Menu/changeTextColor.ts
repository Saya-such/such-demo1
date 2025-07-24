const changeTextColor = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const menuLinks = document.querySelectorAll("#menu a");

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        menuLinks.forEach((link) => {
          link.classList.toggle("text-white", sectionId === id);
        });
      } else {
        menuLinks.forEach((link) => {
          if (link.classList.contains("text-white")) {
            link.classList.remove("text-white");
          }
        });
      }
    });
  };

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(intersectionCallback, options);

  if (section) {
    observer.observe(section);
  }
};

export default changeTextColor;
