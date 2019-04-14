
let input = ['Semi final',
    VIP,
    9,
    Y,];

function solve(input) {
   
    let final = input[0];
    let ticketType = input[1];
    let ticketCount = +input[2];
    let photo = input[3];

    let info = {
        'Quarter final': {
            'Standard': 55.50,
            'Premium': 105.20,
            'VIP': 118.90,
        },
        'Semi final': {
            'Standard': 75.88,
            'Premium': 125.22,
            'VIP': 300.40,
        },
        'Final': {
            'Standard': 110.10,
            'Premium': 160.66,
            'VIP': 400,
        },
    };

    let tickets = ticketCount * info[final][ticketType];

    if (tickets > 4000) {
        tickets = tickets - tickets * 0.25;        
    } else if (tickets > 2500){
        tickets = tickets - tickets * 0.10;
    }

    if (photo === 'Y' && tickets < 4000) {
        tickets = tickets + 40 * ticketCount;
    }

    console.log(tickets.toFixed(2));
}

solve([input]);

            