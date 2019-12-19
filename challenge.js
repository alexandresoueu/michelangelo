const responseLegado = {
    content: [
        {
            info: {
                user: {
                    name: 'Rafael',
                    age: 18
                },
                shoes: [
                    { nsu: '234657', color: 'green' },
                    { nsu: '4365hf', color: 'blue' },
                    { nsu: '93853985k', color: 'red' }
                ],
                cars: [
                    {Paulo: 'lastname'},
                    {da: 'lastname'},
                    {'Silva Queiroz': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }            
        },
        {
            info: {
                user: {
                    name: 'Ale',
                    age: 21
                },
                shoes: [
                    { nsu: '4365hf', color: 'green' },
                    { nsu: '234657', color: 'blue' }
                ],
                cars: [
                    {'Santana': 'lastname'},
                    {'dos Santos Reis': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }
        },
        {
            info: {
                user: {
                    name: 'Ana',
                    age: 10
                },
                shoes: [
                    { nsu: '4365hf', color: 'orange' },
                    { nsu: '234657', color: 'red' }
                ],
                cars: [
                    {'Maria': 'lastname'},
                    {'de Paz Santana': 'lastname'},
                    { nsu: '234657' },
                    { nsu: '234657' }
                ]
            }
        }
    ]
}

// ====================================
// ========= IMPLEMENTAÇÂO ============
// ====================================
const body = responseLegado.content

const names = body.map(cb => {
    const getName = cb.info.user.name 
    return getName
})

const surname = getCars.reduce((acc, cur) => {
    const lastnames = Object.keys(cur)
    console.log(lastnames)
    return `${acc} ${lastnames}`
    
 }, '').trim()

const getCars = body.map(function(cb) {
    const cars = cb.info
    return cars.cars
})
 
const getColors = body.map(cb => {
    const color = cb.info.shoes
    const colors = c => c.color
    const result = color.map(colors).toString()
    return result
})



console.log(surname)
 


// ====================================
// ======= TESTES UNITÁRIOS ===========
// ====================================

// {
//     const input = responseLegado
//     const expected = {
//         'Rafael Paulo da Silva Queiroz' : 'green,blue,red',
//         'Ale Santana dos Santos Reis': 'green,blue',
//     }

//     const result = // TODO: implementar

//     if (JSON.stringify(result) !== JSON.stringify(expected)) {
//         throw Error('should return expected contract')
//     } else {
//         console.log('Success!')
//     }
// }
