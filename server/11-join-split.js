const elements = ['fire', 'earth', 'air', 'water'];
//legacy code
let rtaFinal = ''
const separator = '--'
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal += element + separator  
}

const rta = elements.join(separator)
console.log('legacy', rtaFinal)
console.log('join', rta)

const title = 'The best way to learn JavaScript'
//el split me separa la cadena de texto en arrays con un 
//delimitador, en este caso el espacio
const titleSplited = title.split(' ')
// aqui podemos apreciar la magia de js para trasnformar txt de titulos
// para generar urls
const url = title.split(' ').join('-').toLocaleLowerCase()

console.log(titleSplited, url)