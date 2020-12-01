import friedRice from './img/fried-rice.jpg'
import tomYum from './img/tom-yum.jpg'
import padKraPao from './img/phad-kra-pao.jpg'


const recipes = [
    {
        id: 1,
        dishname: 'Khao pad gai',
        image: friedRice,
        time: '30',
        tags: ['kana', 'riisi', 'khaopadgai', 'khao', 'pad', 'gai', '30min'],
        serving_size: 2,
        description: 'Eli thaimaalainen paistettu riisi kanalla.',
        ingredients: [
            { name: 'Maapähkinäöljyä', amount: 2, unit: 'rkl' },
            { name: 'Valkosipulinkynttä hienonnettuna', amount: 2, unit: 'kpl' },
            { name: 'Linnunsilmächiliä paloiteltuna', amount: 4, unit: 'kpl' },
            { name: 'Broilerin rintafile paloiteltuna', amount: 1, unit: 'kpl' },
            { name: 'Kalakastiketta', amount: 1, unit: 'rkl' },
            { name: 'Vaaleaa soijakastiketta', amount: 1, unit: 'rkl' },
            { name: 'Sokeria', amount: 0.5, unit: 'tl' },
            { name: 'Keitettyä ja jäähdytettyä jasmiiniriisiä', amount: 450, unit: 'g' },
            { name: 'Pieni sipuli viipaloituna', amount: 1, unit: 'kpl' },
            { name: 'Kevätsipulia pätkittynä', amount: 2, unit: 'kpl' },
        ],
        instructions: [
            'Laita öljy ja valkosipuli wokkiin. ',
            'Kuumenna ja paista valkosipulia, kunnes tuoksuu.',
            'Lisää chilit ja paista hetken ajan.',
            'Lisää kana ja paista kovalla lämmöllä vähän aikaa.',
            'Lisää kalakastike, soijakastike ja sokeri.',
            'Sekoita ja paista, kunnes kana on kypsää. Lisää riisi ja riko se irtonaiseksi sekoittamalla hyvin.',
            'Paista hetken ajan käännellen täydellä teholla, niin että riisi saa paistetulle riisille ominaisen, hieman savuisen maun.',
            'Lisää lopuksi sipuli ja kevätsipuli ja paista niin, että sipuli juuri ja juuri kuullottuu, jääden kuitenkin hyvin napakaksi.',
            'Maista ja lisää tarvitteessa kala-, tai soijakastiketta ja sokeria.',
            'Sekoita ja siirrä tarjoiluastiaan.',
        ]
    },
    {
        id: 2,
        dishname: 'Tom yam Kung',
        image: tomYum,
        time: '15',
        tags: ['katkarapu', 'keitto', '15min', 'tomyamkung', 'tom', 'yam', 'kung'],
        serving_size: 2,
        description: 'Thaimaalainen katkarapukeitto. Tulisen aromikas, tom yam kung. Helppo versio.',
        ingredients: [
            { name: 'Vesi', amount: 1, unit: 'l' },
            { name: 'Keltasipuli', amount: 1, unit: 'kpl' },
            { name: 'Lime', amount: 1, unit: 'kpl' },
            { name: 'Inkivääri pala', amount: 1, unit: 'kpl' },
            { name: 'Sitruunaruohoa', amount: 1, unit: 'kpl' },
            { name: 'Tuore chili', amount: 1, unit: 'kpl' },
            { name: 'Herkkusieniä', amount: 0.5, unit: 'rasia' },
            { name: 'Punainen paprika', amount: 0.5, unit: 'kpl' },
            { name: 'Katkarapuja', amount: 0.5, unit: 'pussi' },
            { name: 'Kookosmaitoa', amount: 1, unit: 'prk' },
            { name: 'Kanafondi', amount: 1, unit: 'kpl' },
        ],
        instructions: [
            'Ota katkaravut sulamaan hyvissä ajoin, mielellään jo edellisenä iltana.',
            'Keittopohja: Kuori keltasipuli ja leikkaa viipaleiksi. Pese lime ja hiero sitä pöytälevyä vasten, niin mehu irtoaa paremmin. Raasta limen uloin kuori ja purista mehu.',
            'Kuori ja raasta inkivääriä. Kiehauta vesi, lisää kanafondi, keltasipuli, lehtiselleri, limen kuori ja mehu sekä raastettu inkivääri. Keitä 5 minuuttia ja siivilöi.',
            'Survo sitruunanruohovartta lihanuijalla, painavalla veitsen kahvalla tai vastaavalla, poista uloin kerros varsista ja pilko loput erittäin hienoksi silpuksi.',
            'Leikkaa tuoreita herkkusieniä lohkoiksi. Huuhtele paprika ja pilko hienoksi. Pilko pala tuoretta chiliä hienoksi silpuksi. Vähentämällä chilin määrää keiton maku muuttuu miedommaksi.',
            'Laita sitruunaruoho, herkkusienet, paprika ja chili kattilaan. Kaada keittoon kookosmaito. Anna kiehua parin minuutin ajan. Sekoita lopuksi pussillinen sulatettuja katkarapuja keittoon. Kiehauta ja tarjoile välittömästi.',
        ]
    },
    {
        id: 3,
        dishname: 'Pad kra pao moo',
        image: padKraPao,
        time: '20',
        tags: ['possu', 'riisi', 'kananmuna', 'padkrapaomoo', 'pad', 'kra', 'pao', 'moo', '20min'],
        serving_size: 2,
        description: 'Basilikakastikkeessa tarjoiltu possu on aitoa thaimaalaista pikaruokaa, pad kra pao moo.',
        ingredients: [
            { name: 'Jasminriisiä, annospusseissa', amount: 1, unit: 'kpl' },
            { name: 'Possunlihaa', amount: 300, unit: 'g' },
            { name: 'Edamame-papuja', amount: 100, unit: 'g' },
            { name: 'Paistettua kananmunaa', amount: 2, unit: 'kpl' },
            { name: 'Tuore punainen chili silputtuna', amount: 1, unit: 'kpl' },
            { name: 'Thaibasilikapuskan lehdet', amount: 1, unit: 'kpl' },
            { name: 'Rypsiöljyä', amount: 2, unit: 'rkl' },
            { name: 'Soijakastiketta', amount: 1, unit: 'rkl' },
            { name: 'Klakastiketta', amount: 1, unit: 'rkl' },
            { name: 'Osterikastiketta', amount: 1, unit: 'rkl' },
            { name: 'Valkosipulin kynttä murskattuna', amount: 2, unit: 'kpl' },
            { name: 'Sokeria', amount: 1, unit: 'tl' },
            { name: 'Suolaa', amount: 1, unit: 'tl' },
        ],
        instructions: [
            'Keitä jasminriisiä 10 minuutin ajan.',
            'Laita kasvisöljy kuumalle pannulle ja heita joukkoon murskatut valkosipulinkynnet sekä pilkottu chili. Freesaa hetki, mutta varo ruskistamasta.',
            'Lisää joukkoon possusuikaleet ja paista kunnes kypsät.',
            'Lisää joukkoon pavut ja kaada päälle kastikkeet sekä loput mausteista. Jatka paistamista vileä 2 minuutin ajan.',
            'Ota pannu leideltä ja lisää joukkoon nypityt thaibasilikan lehdet. Kääntele kastikkeeseen tasaisesti.',
            'Aseta lautasille valmis riisi ja kastike.',
            'Paista annoksen pinnalle yksi kananmuna per ruokailija.',
            'Tarjoile halutessasi chiliöljyn tai tulisen sriracha-kastikkeen kanssa.',
        ]
    }
]


export default recipes