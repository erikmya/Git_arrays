const numbers = [1, 2, 3, 4];

let rta = false;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);

console.log(rta2);

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

  const rta3 = orders.some(item => item.delivered);

console.log(rta3);


const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
        return dates.some(date => {
            return areIntervalsOverlapping(
                {start: date.starDate, end: date.endDate},
                {start: date.starDate, end: newDate.endDate}
            )
    })
  }

  console.log('isOverlap', isOverlap(newAppointment));

  // reto numeros par some

  const  num = [1, 3, 5, 7, 10, 11];
  const num2 = [1, 3, 5];
     function hola(numbers) {
    return numbers.some(item => item % 2 === 0)
  }

  const impar = hola(num2);
  const pares = hola(num);
  console.log(pares);
  console.log(impar);