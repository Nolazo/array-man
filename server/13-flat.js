//este metodo aplana los array independiente de los niveles de profundidad
const matriz = [
  [1,2,3],
  [4,5,6,[7,8,9,[10,11,12]]],
  [7,8,9]
]
//leagancy code
const newArray = []
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i]
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j]
    newArray.push(element)
  }
}
console.log('legacy',newArray)

//como los dioses olimpicos lo hacen
//flat(x) x= los niuveles de profundidad que se quiere aplanar
const rta = matriz.flat(3)
console.log('flat',rta)

//reto de aplanar las matrices con recursividad

function aplanarMatriz(matriz){
 let array=[]
  for(element of matriz){
    if(Array.isArray(element)){
      array=array.concat(aplanarMatriz(element))
    }else{
      array.push(element)
    }
 }
  return array;
}
console.log('recursividad',aplanarMatriz(matriz))