const takeUntil = (array, callback) => {
  const resultBuffer = [];
  for (const item of array) {
    if (callback(item)) {
      return resultBuffer;
    };
    resultBuffer.push(item);
  }
  return resultBuffer;
};



//testing

const data1  = ['I', 'have', 'a', 'little', 'kitten', 'cat', 'i','cannot','make','this','kitten','fat']
const results1 = takeUntil(data1, x => x === 'i');
console.log(results1);

const data2 = [1,2,3,4,5,6,7,8,9];
const result2 = takeUntil(data2, x => x > 5);
console.log(result2);