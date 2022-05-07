const letter = ['a', 'b', 'c']
//legacy for loop
for (let i = 0; i < letter.length; i++) {
  console.log(letter[i])
}
//metodo nuevo y optimizado
letter.forEach(item => console.log(item))