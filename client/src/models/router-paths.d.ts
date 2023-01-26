// TODO Remove
interface TestData {
  id: number;
  color: string;
  name: string;
}
//

interface Paths {
  [key: string]: {
    template: (...args: TestData[]) => void; // TODO change test data to proper agrument types
    title: string;
  };
}

interface PathNames {
  [key: string]: string;
}
