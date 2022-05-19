//me dice si el elemento esta dentro del array
const pets = ['cats','dog','bat']
//legacy code
let includeInArray = false
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    includeInArray = true
    break
  }    
}
console.log('for', includeInArray)

//como los hijos de zeus lo hacen
const rta = pets.includes('dog')
console.log('includes', rta)