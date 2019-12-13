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

// ...

// ====================================
// ======= TESTES UNITÁRIOS ===========
// ====================================

{
    const input = responseLegado
    const expected = {
        'Rafael Paulo da Silva Queiroz' : 'green,blue,red',
        'Ale Santana dos Santos Reis': 'green,blue',
    }

    const result = // TODO: implementar

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw Error('should return expected contract')
    } else {
        console.log('Success!')
    }
}
