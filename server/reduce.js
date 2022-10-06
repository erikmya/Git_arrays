const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element; 
}

console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);

// Clase 11

const numeros = [1,1,1];
const par = [2,4,6];

function func(numeros) {
    return numeros.reduce((sum, element) => sum + element, 0);
}
const pares = func(par);
const suma = func(numeros);
console.log(suma)
console.log(pares)

// let sum = 0;

// const tres = numeros.reduce((sum, element) => sum + element, 0);
// console.log('tres', tres);

// const pares = par.reduce((sum, element) => sum + element, 0);
//console.log('pares', pares); 

