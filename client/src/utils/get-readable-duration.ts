export const getReadableDuration = (n: number): string => {
  if (n > 0) {
    const hours = Math.floor(n / 60);
    const minutes = Math.floor(n % 60);
    return `${hours} ч ${minutes} мин`;
  }
  return `0 ч 0 мин`;
};
