let input = [
    'The Favourite',
    'ultra luxury',
    34
];

function solve(input) {
    let film = input[0];
    let hall = input[1];
    let price = input[2];

    let info = {};

    info = {
        'A Star Is Born': {
            'normal': 7.5,
            'luxury': 10.5,
            'ultra luxury': 13.5
        },
        'Bohemian Rhapsody': {
            'normal': 7.35,
            'luxury': 9.45,
            'ultra luxury': 12.75
        },
        'Green Book': {
            'normal': 8.15,
            'luxury': 10.25,
            'ultra luxury': 13.25
        },
        'The Favourite': {
            'normal': 8.75,
            'luxury': 11.55,
            'ultra luxury': 13.95
        },        
    };

    let calc = info[film][hall] * price;
    console.log(`${film} -> ${calc.toFixed(2)} lv.`);
    
}

solve([input]);