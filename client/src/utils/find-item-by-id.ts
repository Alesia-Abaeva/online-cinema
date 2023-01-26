// Just for testing
export const findItemById = (id: number | string, arr: TestData[]): TestData | -1 => {
  const foundItem = arr.find((obj) => obj.id === id);
  return foundItem || -1;
};
