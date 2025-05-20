export const getRandomTransform = () => {
  const minTranslate = -10;
  const maxTranslate = 10;
  const minScale = 0.8;
  const maxScale = 1.2;

  const translateX =
    Math.random() * (maxTranslate - minTranslate) + minTranslate;
  const translateY =
    Math.random() * (maxTranslate - minTranslate) + minTranslate;
  const scale = Math.random() * (maxScale - minScale) + minScale;

  return `translate(${translateX}px, ${translateY}px) scale(${scale})`;
};
