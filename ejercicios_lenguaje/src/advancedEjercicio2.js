const myObject = {
        a: 1,
        b: {
            c: null,
            d: {
                e: 3,
                f: {
                g: "bingo",
            }
        }
        }
    };
    const deepGet = (objeto, ...xs) => {
        const [parametro1,...parametros] = xs;
        if(xs.length == 0){
            return objeto;
        }
        if ( parametros.length == 0){
            return objeto[parametro1];
        }
        else if (objeto[parametro1] != undefined) {
            return deepGet(objeto[parametro1], ...parametros);
        }
    }

    console.log(deepGet(myObject, "x")); // undefined
    console.log(deepGet(myObject, "a")); // 1
    console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
    console.log(deepGet(myObject, "b", "c")); // null
    console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
    console.log(deepGet(myObject)); // {a: 1, b: {...}}

    const saveObject = {};

const deepSet = (value,objeto, ...xs) => {
    const [parametro1,...parametros] = xs;
    if (xs.length == 0){
        return objeto;
    }
    else if(xs.length==1){
        objeto[parametro1]=value;
        return objeto;
    }
    else if(objeto[parametro1] != undefined) {

        objeto[parametro1] = deepSet(value,objeto[parametro1],...parametros);
        return objeto;
    }
    else{
        objeto[parametro1] = deepSet(value,{},...parametros);
        return objeto;
    }

}
deepSet(1, saveObject, "a", "b");
console.log('primer objeto guardado')
console.log(JSON.stringify(saveObject)); // {a: { b: 1}}
deepSet(2, saveObject, "a", "c");
console.log(JSON.stringify(saveObject)); // {a: { b: 1, c: 2}}
deepSet(3, saveObject, "a");
console.log(JSON.stringify(saveObject)); // {a: 3}
deepSet(4, saveObject);
console.log(JSON.stringify(saveObject)); // Do nothing // {a: 3}