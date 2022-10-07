const numbers = [1,30,39,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);

// reto clase 15

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];
 
const ninos = team.every(item => item.age <= 15)
console.log('reto', ninos);

//reto clase 16

const num1 = [2, 4, 6, 8, 10];
const num2 = [1, 3, 5, 7, 10, 11];
const num3 = [1, 3, 5];

function par(numbers){
    return numbers.every(item => item % 2 === 0);
} 

const par1 = par(num1);
const par2 = par(num2);
const par3 = par(num3);

console.log(par1);
console.log(par2);
console.log(par3);
