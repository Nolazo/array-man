//es un metodo para hacer ordenamiento dentro de los arrays, es mutable
// sort hace el ordenamiento mediante el ACSII por defecto
const months = ['March','Jan','Feb','Dec'];
months.sort();
console.log(months);


const numbers = [1,30,4,21,100000];
//esta f(x) anonima es para ordenar de mayor a menor
numbers.sort((a,b)=>a-b);
console.log(numbers);


const words = ['réservé','premier','communiqué','café','adieu']
words.sort()
// //esto es para que ordene de manera alfabetica pero cuando sean navegadores viejos (IE) o versiones antiguas de node
// words.sort((a,b)=>a.localeCompare(b))
console.log(words);


const orders = [
  {customerName:"Nicolas", total:600, delivered:true, Date:new Date(2020,1,1)},
  {customerName:"Zulema", total:120, delivered:false, Date:new Date(2020,1,2)},
  {customerName:"Juan", total:500, delivered:false, Date:new Date(2020,1,3)},
  {customerName:"Jose", total:200, delivered:true, Date:new Date(2020,1,4)},
]
//para ordenar por el total de las ordenes de mayor a menor
orders.sort((a,b)=>b.total-a.total);
console.log(orders);

//reto hacer el ordenamiento por fechas