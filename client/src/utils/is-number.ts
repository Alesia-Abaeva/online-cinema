export const isNumber = (data: string): boolean => {
  const numFromStr = +data;
  return !Number.isNaN(numFromStr);
};
