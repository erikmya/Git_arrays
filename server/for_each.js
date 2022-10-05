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

//ejercicio clase 5

const tienda = [ {
    Name:'pantalon',
    price: 1000,
    stock: 5000,
    }
];

const newArray = tienda.map(item1 => {
    return{
        ...item1,
        tax: Math.trunc( item1.price * 0.19),
    };
});

console.log('Articulo: ', tienda);
console.log('Taxes: ', newArray);