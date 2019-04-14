let input = [
    5,
1400,
F,
SF,
W,
W,
SF,

];

function solve(input) {

    let counter = input[0];
    let startPoint = input[1];

    let obj = {
        W: 2000,
        F: 1200,
        SF: 720
    };

    let sum = Number(input[1]);
    let points = 0;
    let win = 0;

    for (let index = 2; index < input.length; index++) {
        switch (input[index]) {
            case "F":
                sum = sum + obj.F;
                points = points + obj.F; 
                break;
            case "W":
                sum = sum + obj.W;
                points = points + obj.W;
                win++;
                break;
            case "SF":
                sum = sum + obj.SF;
                points = points + obj.SF;
                break;                
            default:
                break;
        }        
    }

    let average = points / counter;
    let winPercent = (win / counter) * 100;

    console.log(`Final points: ${sum}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

solve(input);