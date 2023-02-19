export const formatPriceNum = (price: number): string => {
  if (Number.isFinite(price)) return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
  return '';
};
