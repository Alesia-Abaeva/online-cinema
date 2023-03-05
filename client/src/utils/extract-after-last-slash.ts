export const extractAfterLastSlash = (path: string): string => {
  return path.substring(path.lastIndexOf('/') + 1);
};
