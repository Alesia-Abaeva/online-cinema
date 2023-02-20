export const toSecondsAndMinutes = (sec: number): string => {
  if (Number.isFinite(sec)) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return '00:00';
};
