export const toHoursAndMinutes = (min: number): { hours: number; minutes: number } => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return { hours, minutes };
};
