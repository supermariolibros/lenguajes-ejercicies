var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
var b = {name: "Luisa", age: 31, married: true};

function cloneLocal(obj) {
    var temp = {};
    Object.assign(temp, obj);
return temp;
}

function clone(objToClone)  {
    var result = {};
    for (const prop in objToClone) {
        console.log(`obj.${prop} = ${objToClone[prop]}`);
        result[prop] = objToClone[prop];
      }
    return result;
}

function merge(obj1,obj2) {
    return {...obj2 ,...obj1}
}

console.log("Tenemos dos objetos iniciales");
console.log("a -> ");
console.log(a);
console.log("b -> ");
console.log(b);
console.log("Clonamos a y creamos la variable c");
var c = clone(a);
console.log("c -> ");
console.log(c);
console.log("Para asegurarnos que el clonado es correcto y no que hay referencias valor a valor");
console.log("le cambiamos el valor al nombre de la variable de c y vemos si se refleja en a");
console.log("c.name = Pepa");
c.name = "Pepa";
console.log("a -> ");
console.log(a);
console.log("c modificada -> ");
console.log(c);

console.log("Por ultimo mergeamos a y b: ");
var d = merge(a,b);
console.log(d);
a.name = "Rosana"
console.log(d);
console.log(a);
