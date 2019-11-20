const head = (array ) => {
    const [init, ...tail] = array;
    return init;
  };
const tail = (array) => {
    const [init, ...tail] = array;
    return tail;
};

const last = (array) => {
  return array[array.length-1];
}; 

const init = (array) => {
  const [head, ...tail] = array;
  if (tail.length > 1){
      return [head, init(tail)];
  }
  else {
      return head;
  }
};


const arrayTest = [1,2,3,4,5];

console.log("ARRAY TEST ->" + arrayTest);
console.log("HEAD ->" + head(arrayTest));
console.log("INIT ->" + init(arrayTest));
console.log("LAST ->" + last(arrayTest));
console.log("TAIL ->" + tail(arrayTest));
