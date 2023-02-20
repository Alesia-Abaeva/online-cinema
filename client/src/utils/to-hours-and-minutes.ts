export const toHoursAndMinutes = (min: number): { hours: number; minutes: number } => {
  if (Number.isFinite(min)) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return { hours, minutes };
  }
  return { hours: 0, minutes: 0 };
};
