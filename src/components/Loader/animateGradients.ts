const gradients = [
  "linear-gradient(150deg,rgba(58, 129, 180, 1) 0%, rgba(255, 255, 255, 1) 15%, rgba(252, 176, 69, 1) 30%, rgba(211, 39, 81, 1) 50%, rgba(131, 58, 180, 1) 90%, rgba(58, 129, 180, 1) 100%)",
  "linear-gradient(150deg,rgba(131, 58, 180, 1) 0%, rgba(58, 129, 180, 1) 10%, rgba(255, 255, 255, 1) 25%, rgba(252, 176, 69, 1) 40%, rgba(211, 39, 81, 1) 60%, rgba(131, 58, 180, 1) 100%)",
  "linear-gradient(150deg,rgba(131, 58, 180, 1) 0%, rgba(58, 129, 180, 1) 20%, rgba(255, 255, 255, 1) 45%, rgba(252, 176, 69, 1) 60%, rgba(211, 39, 81, 1) 80%, rgba(131, 58, 180, 1) 100%)",
  "linear-gradient(150deg,rgba(211, 39, 81, 1) 0%, rgba(131, 58, 180, 1) 20%, rgba(58, 129, 180, 1) 40%, rgba(255, 255, 255, 1) 65%, rgba(252, 176, 69, 1) 80%, rgba(211, 39, 81, 1) 100%)",
  "linear-gradient(150deg,rgba(211, 39, 81, 1) 0%, rgba(131, 58, 180, 1) 60%, rgba(58, 129, 180, 1) 78%, rgba(255, 255, 255, 1) 100%)",
  "linear-gradient(150deg,rgba(0, 0, 0, 1) 50%, rgba(131, 58, 180, 1) 100%",
];

const commonCatchStyles = {
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const durations = [0.1, 0.08, 0.1, 0.05, 0.1, 0.05];

const opacities = [0.7, 0.8, 0.9, 0.9, 0.9, 1.0];

export const animateGradients = (selector: string, tl: gsap.core.Timeline) => {
  gradients.forEach((gradient, i) => {
    tl.to(selector, {
      ...commonCatchStyles,
      backgroundImage: gradient,
      duration: durations[i],
      opacity: opacities[i],
    });
  });
  tl.to(selector, {
    clearProps:
      "backgroundImage,backgroundClip,WebkitBackgroundClip,WebkitTextFillColor",
    color: "black",
    duration: 0.1,
  });

  return tl;
};
