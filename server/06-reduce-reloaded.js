const items = [1,3,2,3]
//explicacion en el notion correspondiente con el cuadro de iteracion
const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1
  }else{
    obj[item] = obj[item] + 1
  }
  return obj
}, {})
//Esta tecnica de contar los valores de un array se llama histograma
console.log(rta)

//advertencia papu lo de abajo se comienza a poner hermoso
const players = [
  {name: 'Wes', level: 'low'},
  {name: 'Sarah', level: 'high'},
  {name: 'Ryan', level: 'medium'},
  {name: 'Mark', level: 'low'},
  {name: 'Pete', level: 'high'},
  {name: 'Sophie', level: 'medium'},
  {name: 'Mia', level: 'low'},
]

const rta1 = players
  .map(player => player.level)
  .reduce((obj, player) => {
    if (!obj[player]) {
      obj[player] = 1
    }else{
      obj[player] = obj[player] + 1
    }
    return obj
  }, {})

  console.log(rta1)

  //otra forma de hacerlo
  const rta2 = players
    .reduce((obj, player) => {
      if (!obj[player.level]) {
        obj[player.level] = 1
      }else{
        obj[player.level] = obj[player.level] + 1
      }
      return obj
    }, {})

    console.log(rta2)

    //RETO A RESOLVER = Agrupar en histograma pero de rangos, ejemplo