export const getReadableVotes = (n: number): string => {
  let result = n;
  if (n >= 1000) {
    result = Math.floor(n / 1000);
    return `${result}K`;
  }
  return `0K`;
};
