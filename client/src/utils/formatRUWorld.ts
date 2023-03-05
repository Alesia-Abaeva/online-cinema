export const formatRuWord = (value: number, words: string[]): string => {
  const valueNew = Math.abs(value) % 100;
  const num = valueNew % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
};
