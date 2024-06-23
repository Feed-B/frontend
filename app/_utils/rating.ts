const MAX_STAR = 5;

export const starPercent = (rate: number) => {
  const percent = (rate / MAX_STAR) * 100;
  return String(percent) + "%";
};
