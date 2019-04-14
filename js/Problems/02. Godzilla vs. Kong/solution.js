let input = [
    9587.88,
    222,
    55.68,
];

function solve(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothing = Number(input[2]);

    let stageSet = budget * 0.1;
    let sumClothings = people * clothing;

    if (people > 150) {
        sumClothings = sumClothings - sumClothings * 0.1;
    }

    let sum = stageSet + sumClothings;

    if (sum <= budget) {
        let calc = budget - sum;         
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${calc.toFixed(2)} leva left.`);
    } else {
        let calc = sum - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${calc.toFixed(2)} leva more.`);        
    }   

    
}

solve([input]);
