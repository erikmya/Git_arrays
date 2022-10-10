const users =[
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log('map y flat', rta);

console.log('rta2', rta2);

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const rt3 = Object.values(calendars).flatMap(item => {
    console.log('item', item);
    return item.map(date => date.startDate);
});
console.log(rt3);

// Clase 25 reto

const oraciones = ["Beautiful is better than ugly",
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated"];

function contador(oraciones) {
    return lineas = oraciones.flatMap(item => item.split(' '));
}

const numero = contador(oraciones);
console.log('palabras', numero.length);

// Clase reto 25 2.0 

const oraciones3 = ["Beautiful is better than ugly",
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated"];

function contador(oracion) {
    return lineas = oracion.flatMap(item => item.split(' ')).length;
}

const numero2 = contador(oraciones3);
console.log('palabras', numero2);

