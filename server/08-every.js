//todos los elementos deben cumplir con la condicion
//retorna true or false
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//legacy code
let rta = true
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    rta = false
  }
}
console.log('for',rta)

//como los dioses lo hacen
const rta2 = numbers.every(item => item >= 40)
console.log('rta2',rta2)