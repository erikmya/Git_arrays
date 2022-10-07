const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;  
        break;
    } 
}
console.log('for', includeInArray);

const rta = pets.includes('dog')
console.log('includes', rta);

//Reto clase 19

const nombres = ['Ana lava la tina', 'ana'];
const nombres2 = ['Nicolas', 'ana'];
const nombres3 = ['Santiago', 'tiago']
function anita(palabras) {
    return palabras.includes('ana');
}
const name1 = anita(nombres);
const name2 = anita(nombres2);
const name3 = anita(nombres3);
console.log(name1);
console.log(name2);
console.log(name3);
