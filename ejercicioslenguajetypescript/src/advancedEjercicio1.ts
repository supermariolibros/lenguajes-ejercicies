const sample: Array<any> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

function aplanar(arrayIn: Array<any>): Array<number> {
    const [init, ...tail] = arrayIn;
    if(arrayIn.length==0){
        return;
    }
    if (!Array.isArray(init) && tail.length == 0){
        return [init];
    }
    else if (!Array.isArray(init) && tail.length != 0) {
        return [init, ...aplanar(tail)];
    }
    else if (tail.length == 0){
        return [...aplanar(init)];
    }
    else {
        return [...aplanar(init), ...aplanar(tail)];
    }
};

console.log(aplanar(sample));