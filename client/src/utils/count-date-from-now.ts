/** Функция добавляет количетсво дней к дате  */
export const countDateFromNow = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
