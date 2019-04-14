
let input = [Bulgaria,
    ribbon];

function solve(input) {
    let country = input[0];
    let discipline = input[1];

    let info = {};
    info = {
        'Bulgaria': {
            'ribbon': {
                'difficulty': 9.600,
                'execution': 9.400
            }, 
            'hoop': {
                'difficulty': 9.550,
                'execution': 9.750
            }, 
            'rope': {
                'difficulty': 9.500,
                'execution': 9.400
            }, 
        },
        'Russia': {
            'ribbon': {
                'difficulty': 9.100,
                'execution': 9.400
            }, 
            'hoop': {
                'difficulty': 9.300,
                'execution': 9.800
            }, 
            'rope': {
                'difficulty': 9.600,
                'execution': 9.000
            }, 
        },
        'Italy': {
            'ribbon': {
                'difficulty': 9.200,
                'execution': 9.500
            }, 
            'hoop': {
                'difficulty': 9.450,
                'execution': 9.350
            }, 
            'rope': {
                'difficulty': 9.700,
                'execution': 9.150
            }, 
        }
    }

    let sum = info[country][discipline].difficulty + info[country][discipline].execution;
    let rest = 20 - sum;
    let percent =  (rest / 20) * 100;
    console.log(`The team of ${country} get ${sum.toFixed(3)} on ${discipline}.`);
    console.log(`${percent.toFixed(2)}%`);
}

solve([input]);
