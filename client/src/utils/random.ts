export const getRandom = (max: number): number => {
  return Math.floor(Math.random() * max);
};

// export const generateArray = (length: number, array) => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     const index = getRandom(array.length);
//     result.push(array[index]);
//   }

//   return result;
// };
