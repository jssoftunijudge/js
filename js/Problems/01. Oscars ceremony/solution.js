let input = [3500];

function solve(inputArr) {
    let input = Number(inputArr[0]);
    let statuette = Number(input) - Number(input) * 0.3;
    let catering = Number(statuette) - Number(statuette) * 0.15;    
    let sound = Number(catering) - Number(catering) * 0.5;

    let obj = {
        'hall': input,
        'statuette': statuette,
        'catering': catering,
        'sound': sound,        
    }

    let sum = obj.hall + obj.statuette + obj.catering + obj.sound;
    console.log(sum.toFixed(2));
    
}

solve([input]);

