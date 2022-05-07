const totals = [1, 2, 3, 4]
//Legacy
let sum = 0;
for (let i = 0; i < totals.length; i++) {
  const item = totals[i];
  sum += item
}
console.log(sum)

//Version pro fachero facherito. Un array lo reducimos a un valor
//(acumulador item a iterar) // => ejecutamos la funcion, // el 0 es el estado inicial
const rta = totals.reduce((sum , item) => sum + item, 0)
console.log(rta)