let input = [

10,
'Back',
'Chest',
'Legs',
'Abs',
'Protein shake',
'Protein bar',
'Protein shake',
'Protein bar',
'Legs',
'Abs',


];

function solve(input) {

    let obj = {
        back: 0,
        chest: 0,
        legs: 0,
        abs: 0,
        proteinShake: 0,
        proteinBar: 0
    };

    let sum = input[0];

    for (let index = 1; index < input.length; index++) {
        
        switch (input[index]) {
            case "Back":
                obj.back = obj.back + 1;
                break;
            case "Chest":
                obj.chest = obj.chest + 1;
                break;
            case "Legs":
                obj.legs = obj.legs + 1;
                break;     
            case "Abs":
                obj.abs = obj.abs + 1;
                break;     
            case "Protein shake":
                obj.proteinShake = obj.proteinShake + 1;
                break;  
            case "Protein bar":
                obj.proteinBar = obj.proteinBar + 1;
                break;      
            default:
                break;
        }        
        
    }

    console.log(`${obj.back} - back`);
    console.log(`${obj.chest} - chest`);
    console.log(`${obj.legs} - legs`);
    console.log(`${obj.abs} - abs`);

    console.log(`${obj.proteinShake} - protein shake`);
    console.log(`${obj.proteinBar} - protein bar`);

    let workOut = ((obj.back + obj.chest + obj.legs + obj.abs) / sum) * 100;
    let protein = ((obj.proteinShake + obj.proteinBar) / sum) * 100;

    console.log(`${workOut.toFixed(2)}% - work out`);
    console.log(`${protein.toFixed(2)}% - protein`);

}

solve(input);