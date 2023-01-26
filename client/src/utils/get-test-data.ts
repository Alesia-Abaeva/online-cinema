import { findItemById } from './find-item-by-id';

export const getTestData = async (id: number | string): Promise<TestData | -1> => {
  let testStore: TestData[] = [];
  testStore = await (await fetch('http://localhost:3000/garage')).json();

  return findItemById(id, testStore);
};
