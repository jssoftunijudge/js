let input = [
    'Michael van Gerwen',
    'Triple',
    20,
    'Triple',
    19,
    'Double',
    10,
    'Single',
    3,
    'Single',
    1,
    'Triple',
    20,
    'Triple',
    20,
    'Double',
    20,

];

function solve(input) {

    let maxPoints = 301;
    let name = input[0];

    let hits = [];
    let points = [];

    for (let index = 1; index < input.length; index++) {
       
        if (index % 2 !== 0) { 
            if (input[index] !== 'Retire' && input[index] !== '') {
                hits.push(input[index]);
            }
        } else {
            points.push(input[index]);
        }
       
    }

    let counterSuccess = 0;
    let counterFail = 0;

    function count(compare) {
        if (maxPoints > compare && compare >= 0) {
            maxPoints = compare;
            counterSuccess++;
        } else {
            counterFail++;
        }
    }

    for (let index = 0; index < hits.length; index++) {
        let compare;

        switch (hits[index]) {
            case 'Triple':
                compare = maxPoints - points[index] * 3;
                count(compare);
                break;
            case 'Double':
                compare = maxPoints - points[index] * 2;    
                count(compare);
                break;
            case 'Single':
                compare = maxPoints - points[index];
                count(compare);
                break;
            default:
                break;
        }
        
    } 

    if (maxPoints === 0) {
        debugger;
        console.log(`${name} won the leg with ${counterSuccess} shots.`);
        return;
    } else {
        console.log(`${name} retired after ${counterFail} unsuccessful shots.`);
    }

}

solve(input);