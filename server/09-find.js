const numbers = [1,30,49,29,10,13]
//legacy code
let rta = undefined
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  if (element === 30) {
    rta = element
    break
  }
}
console.log('for',rta)
//como los cracs lo hacen
const rta2 = numbers.find(item => item === 30)
console.log('find',rta2)
//el find solo devuelve un valor, el primero que haga match con la condicion

const products = [
  {
    name: "Pizza",
    price: 200,
    id: '🍕'
  } ,
  {
    name: "Anvorguesa",
    price: 300,
    id: '🍔'
  },
  {
    name: "Pollo",
    price: 400,
    id: '🍗'
  },
  {
    name: "Pescado",
    price: 500,
    id: '🐟' 
  }
]
const rta3 = products.find(item => item.id === '🍗')
console.log('find',rta3)
//es para encontrar la posicion (index) del elemento
//que cumpla con la condicion
const rta4 = products.findIndex(item => item.id === '🍗')
console.log('findIndex',rta4)