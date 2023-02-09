export const validateExpDate = (unfDate: string): boolean => {
  const today = new Date();
  const cardDate = new Date();
  const [month, year] = unfDate.slice(0, 5).split('/');
  cardDate.setFullYear(+`20${year}`, +month - 1, 1);
  return cardDate > today;
};
