const data = {
    cars: [
        { 'Maria': 'lastname' },
        { 'de Paz Santana': 'lastname' },
        { nsu: '234657' },
        { nsu: '234657' }
    ]
}

const surname = data.cars.reduce((acc, cur) => {
   const lastnames = Object.keys(cur)
    console.log(lastnames.join())
}, '')
