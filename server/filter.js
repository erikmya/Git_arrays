const palabras = ['dos', 'cinco', 'dieciseis', 'veinticuatro'];

const newArray = []; 
for (let index = 0; index < palabras.length; index++) {
    const item = palabras[index];
    if(item.length >= 5){
        newArray.push(item);

    }
}
console.log('newArray', newArray);
console.log('original', palabras);

const rta = palabras.filter(item => item.length >= 5)
console.log('rta', rta);
console.log('original', palabras);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2456,
        delivered: false,
      },
  ]

  const rta3 = orders.filter(item => item.delivered && item.total >= 100)
  console.log('rta3', rta3);

  const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
  }

  console.log(search('Nico'));

  //clase9

const word = ['amor', 'sol', 'piedra', 'dia']

const rta4 = word.filter(item => item.length >= 4) 
console.log('palabras', rta4);