export const getDateFromTimestamp = (timestamp: string): string => {
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const date = new Date(timestamp);

  if (date.getTime() > 0) {
    return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`;
  }

  return 'нет информации';
};
