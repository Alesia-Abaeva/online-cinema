export const extractPathId = (path: string): number | -1 => {
  const splittedPath = path.split('/');
  if (splittedPath.length > 0) {
    const id = splittedPath[splittedPath.length - 1];
    return id && !Number.isNaN(+id) && splittedPath.length === 3 ? +id : -1;
  }
  return -1;
};
