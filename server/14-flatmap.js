//conciderar que flatMap solo puede llegar hasta 1 nivel de profundidad
const users=[
  {userId:1,username:"Tom",attributes:["Nice","Cute"]},
  {userId:2,username:"Mike",attributes:["Lovely"]},
  {userId:3,username:"Nico",attributes:["Nice",'Cool']},
]
const rta = users.map(user=>user.attributes).flat()
//esta forma fusiona las 2 de arriba, e ves de hacer un map y luego un flat
const rta2 = users.flatMap(user=>user.attributes)
console.log('map-flat',rta)
console.log('rta2',rta2)
//reto fechas de inicio de estos apointments
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
//solucion del master
const rta3 = Object.values(calendars).
flatMap(calendar=>calendar.flatMap(calendar=>calendar.startDate))
console.log('rta3',rta3)

//mi solucion
function getAppointments() {
  const primaryCal = calendars.primaryCalendar.flatMap(calendar=>calendar.startDate)
  const secondaryCal = calendars.secondaryCalendar.flatMap(calendar=>calendar.startDate)
  console.log([...primaryCal, ...secondaryCal])
}
getAppointments()
