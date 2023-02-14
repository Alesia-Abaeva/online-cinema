export const valiadteId = (commonPath: string, id: string): boolean => {
  if (commonPath === '/films' || commonPath === '/name') {
    return !Number.isNaN(+id);
  }
  return true;
};
