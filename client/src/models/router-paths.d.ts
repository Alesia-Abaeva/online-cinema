interface Paths {
  [key: string]: {
    template: (...args: ResponseMovie[]) => void;
    title: string;
  };
}

interface PathNames {
  [key: string]: string;
}
