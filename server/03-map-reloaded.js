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
    delivered: false,
  },
]

console.log('original', orders)
//Crea un array con los datos que necesitamos de los objetos
const rta = orders.map((item) => item.total)
console.log('new', rta)

//cambio el original porque se crea una modificacion al objeto que esta en memoria
// const rta2 = orders.map((item) => {
//   item.tax = 0.19
//   return item
// })

// console.log("rta", rta2)
// console.log('original', orders)

//forma correcta de usar map para mantener la inmutabilidad
const rta3 = orders.map((item) => {
  return{
    ...item,
    tax: 0.19
  }
})

console.log('rta3', rta3)
console.log('original', orders)