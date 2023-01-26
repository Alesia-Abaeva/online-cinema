// Just for testing
export const findItemById = (id: number, arr: TestData[]): TestData | -1 => {
  const foundItem = arr.find((obj) => obj.id === id);
  return foundItem || -1;
};
