const letras = ['a', 'b', 'c'];

const newArray = letras.map(item => item + '++');

//const newArray = [];
//for (let index = 0; index < letras.length; index++) {
//    const element = letras[index];
//    newArray.push(element + '++');
//}

console.log('original', letras);
console.log('plus', newArray);
