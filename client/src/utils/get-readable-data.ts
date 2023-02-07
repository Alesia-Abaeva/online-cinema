export const getReadableDuration = (n: number): string => {
  const hours = Math.floor(n / 60);
  const minutes = Math.floor(n % 60);
  const result = `${hours} ч ${minutes} мин`;
  return result;
};

export const getReadableVotes = (n: number): string => {
  let result = n;
  if (n >= 1000) {
    result = Math.floor(n / 1000);
  }

  return `${result}K`;
};
