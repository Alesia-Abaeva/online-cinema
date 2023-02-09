export const formatPriceNum = (price: number | string): string => {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
};
