const letters = ['a', 'b', 'c']

//forma legacy
// const newArray = []
// for (let i = 0; i < letters.length; i++) {
//   const element = letters[i]
//   newArray.push(element + '++')
// }

// con map (genera un nuevo array con la trasnformacion deseada)
const newArray = letters.map(item => item + '++')

console.log('original', letters)
console.log('new', newArray)