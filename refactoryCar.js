const data = {
    cars: [
        { 'Maria': 'lastname' },
        { 'de Paz Santana': 'lastname' },
        { nsu: '234657' },
        { nsu: '234657' }
    ]
}

const surname = data.cars.reduce((acc, cur) => {
   const lastnames = Object.keys(cur).filter(name => name !== 'nsu').toString()
   return `${acc} ${lastnames}`
}, '').trim()

console.log(surname == 'Maria de Paz Santana')
