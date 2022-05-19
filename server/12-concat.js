// es para concatenar 2 arrays, q xido
const elements = [1,2,3,4,5]
const elements2 = [6,7,8,9,10]
//legacy code
const newArray = [...elements] //el splitOperation es para q notenga referencia en memoria
for (let index = 0; index < elements2.length; index++) {
  const element = elements2[index];
  newArray.push(element)
}
console.log('legacy',newArray)

//como los dev mas duros lo hacen
const rta = elements.concat(elements2)
const rta2 = [...elements, ...elements2]//si envias algo q no es array gg
elements.push(...elements2)//para mutar el arrray original
console.log('concat',rta)
console.log('splitOp',rta2)
console.log('Mutacion del array',elements)