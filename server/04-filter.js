const words = ['spray', 'limit', 'elite', 'exuberant'];

//legacy
const newArray = []
for (let i = 0; i < words.length; i++) {
  const item = words[i] 
  if (item.length >= 6) {
    newArray.push(item)
  }
}
console.log('newArray', newArray)
console.log('original', words)

//for pros, and big cook
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta)
console.log('original', words)

//ejemplo
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

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3)

//un buscador, no hay problema PA PÁ
const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query)
  })
}

console.log('search', search('Alex'))