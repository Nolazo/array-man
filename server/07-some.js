const numbers = [1, 1, 3, 4];
//legacy code
// let rta = false;
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if(element % 2 === 0){
//     rta = true;
//     break
//   }
// }
// console.log(rta)

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2)

const orders = [
  {
    customerName: 'Igor',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Vlad',
    total: 100,
    delivered: false,
  },
  {
    customerName: 'Anna',
    total: 90,
    delivered: true,
  },
  {
    customerName: 'Alex',
    total: 70,
    delivered: true,
  },
  {
    customerName: 'Andrey',
    total: 120,
    delivered: true,
  },
]

const rta3 = orders.some(item => item.delivered)
console.log(rta3)

// ==========================Ejercicio de fechas=================================================================

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
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverLap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate},
    )
  })
}

console.log(isOverLap(newAppointment))