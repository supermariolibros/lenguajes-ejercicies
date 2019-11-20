
const concat = (a, b) => {
    return [...a,...b];
};

const concatMulti = (...xs) => {
return xs.reduce((x,y) => concat(x,y), []);
}




const arrayTest = [1,2,3,4,5];
console.log("Concat simple")
console.log(concat(arrayTest, arrayTest));
console.log("Concat MULTIPLE")
console.log(concatMulti(arrayTest,arrayTest,arrayTest));

// esta permitido usar la funcion reduce?
