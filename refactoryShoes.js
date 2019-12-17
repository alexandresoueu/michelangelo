const data = {
    shoes: [
        { nsu: '234657', color: 'green' },
        { nsu: '4365hf', color: 'blue' },
        { nsu: '93853985k', color: 'red' }
    ]
}

const getShoesColor = data.shoes.map(function(color) {
    return color.color
}).toString()

getShoesColor