const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) =>{
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

//output
// `{
//     1: 1,
//     3: 3,
//     3: 1
// }

// Reto clase 12

const numeros = [1,2,3,4,5,6,7,8,9,10];

const entre = numeros.reduce((obj, item) =>{
    if (item <= 5) {
        obj[item <= 5] = obj['1-5'] += 1;
    }else if (item <= 8) {
        obj[item <= 8] = obj['6-8'] += 1;
    }else{ obj[item <= 9] = obj['8-9'] += 1;
}
    return obj;
},{'1-5':0, '6-8':0, '8-9':0});

console.log('reto', entre);