const elements = ["Fire","Air","Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulacion de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

// Reto Clase 21

const title1 = 'La forma de correr Python';
const title2 = 'La API para nunca parar de aprender';
const title3 = 'Curso de arrays';

function url(titulo) {
    return titulo.split(' ').join('-').toLowerCase();
    
}

const dir = url(title1);
const dir2 = url(title2);
const dir3 = url(title3);

console.log(dir);
console.log(dir2);
console.log(dir3);

