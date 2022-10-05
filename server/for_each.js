const letras = ['a', 'b', 'c'];

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log('For', element);
}

letras.forEach(item => console.log('foreach',item))

//ejercicio clase4 

function numeros(array) {
    return array.map(item => console.log(item));
}

const array = ['1', '2', '3','4']; 
const numerosArray = numeros(array);

console.log(numerosArray);