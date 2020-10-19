const recipes = [
    {
        id: 1,
        dishname: 'Nuudeli',
        image: '',
        time: '10',
        serving_size: 1,
        description: 'Helpot ja epälöysät nuudelit',
        ingredients: [
            {name: 'Nuudeli paketti', amount: 1, unit: 'kpl'},
            {name: 'Vesi', amount: 2, unit: 'dl'},
        ],
        instructions: [
            'Keitä vesi kiehuvaksi. ',
            'Kaada kiehuvaan veteen nuudelit ja mausteet.',
            'Keitä muutama minuutti kunnes pehmenevät',
            'Kaada nuudelikeitto lautaselle ja nauti'
        ]
    },
    {
        id: 2,
        dishname: 'Chicken Parmesán',
        image: '',
        time: '30',
        serving_size: 1,
        description: 'Helpot ja epälöysät nuudelit',
        ingredients: {
            ingredient_1: {name: 'Nuudeli paketti', amount: 2, unit: 'kpl'},
            ingredient_2: {name: 'Vesi', amount: 2, unit: 'dl'},
        },
        instructions: {
            instruction_1: 'Keitä vesi kiehuvaksi. ',
            instruction_2: 'Kaada kiehuvaan veteen nuudelit ja mausteet.',
            instruction_3: 'Keitä muutama minuutti kunnes pehmenevät',
            instruction_4: 'Kaada nuudelikeitto lautaselle ja nauti'
        }
    },
]


export default recipes