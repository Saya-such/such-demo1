const gradientValues = [
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

const durationValues = [0.1, 0.08, 0.1, 0.05, 0.1, 0.05];

const opacityValues = [0.7, 0.8, 0.9, 0.9, 0.9, 1.0];

/**
 * @description 渡されたtlに対してselectorへのテキストグラデーションのアニメーションを追加し、更新したTimelineを返す。
 * DOM要素の取得は行わない。
 *
 * @param {Object} params - アニメーション設定オブジェクト
 * @param {string | HTMLElement} params.selector - アニメーションの対象の要素
 * @param {GSAPTimeline} params.tl - アニメーションを追加するTimeline
 * @param {string} [params.color="black"] - アニメーション後のselectorの色
 * @param {boolean} [params.faded=false] - trueの時にアニメーション中のselectorの不透明度の変化(opacityValues)に ×0.1する。
 * @param {number} [params.opacity=1.0] - アニメーション後のselectorの不透明度
 *
 * @returns {GSAPTimeline} GSAPTimelineインスタンス
 *
 * @remarks
 * - Timelineは事前に作成されたものを渡すこと
 */
export const createTextGradientTimeline = ({
  selector,
  tl,
  color = "black",
  faded = false,
  opacity = 1.0,
}: {
  selector: string | HTMLElement;
  tl: GSAPTimeline;
  color?: string;
  faded?: boolean;
  opacity?: number;
}): GSAPTimeline => {
  const scaleValue = faded ? 0.1 : 1;

  gradientValues.forEach((gradient, i) => {
    tl.to(selector, {
      ...commonCatchStyles,
      backgroundImage: gradient,
      duration: durationValues[i],
      opacity: opacityValues[i] * scaleValue,
    });
  });
  tl.to(selector, {
    clearProps:
      "backgroundImage,backgroundClip,WebkitBackgroundClip,WebkitTextFillColor",
    color: color,
    opacity: opacity,
    duration: 0.1,
  });

  return tl;
};
