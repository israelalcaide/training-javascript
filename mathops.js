// const mathOps = {
//   randomNumbers: (max, min) =>
//     Math.floor(Math.random() * (max - min + 1)) + min,
//   fillArray: (array, elements, max, min) => {
//     for (let start = 0; start < elements; start++) {
//       array[start] = mathOps.randomNumbers(max, min);
//     }
//     return array;
//   },
//   showArray: (array) => {
//     for (let start = 0; start < array.length; start++) {
//       console.log(array[start]);
//     }
//   },
//   numbers: [],
// };

// mathOps.fillArray(mathOps.numbers, 4, 500, 1);
// mathOps.showArray(mathOps.numbers);

let numbers = [];

const randomNumbers = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const fillArray = (array, elements, max, min) => {
  for (let start = 0; start < elements; start++) {
    array[start] = randomNumbers(max, min);
  }
  return array;
};

const showArray = (array) => {
  for (let start = 0; start < array.length; start++) {
    console.log(array[start]);
  }
};

fillArray(numbers, 7, 8, -8);

showArray(numbers)