export const getReadableDuration = (n: number) => {
  const hours = Math.floor(n / 60);
  const minutes = Math.floor(n % 60);
  const result = `${hours} ч ${minutes} мин`;
  return result;
};

export const getReadableVotes = (n: number) => {
  if (n >= 1000) {
    return Math.floor(n / 1000);
  }
  return n;
};
