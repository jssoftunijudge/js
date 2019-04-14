
let input = [Desi,
    Niki,
    7,
    5,
    3,
    4,
    3,
    3,
    5,
    3];

function solve(input) {
   let player1 = input[0];
   let player2 = input[1];

   let player1Sum = 0;
   let player2Sum = 0;

   let cards1 = [];
   let cards2 = [];

   for (let index = 2; index < input.length; index++) {
       const element = input[index];

       if (index % 2 == 0) {
          cards1.push(input[index]); 
       } else {
        cards2.push(input[index]);
       }
   }

   let sum1 = 0;
   let sum2 = 0;

   for (let index = 0; index < cards1.length; index++) {
        if (cards1[index] !== '' && cards2[index] !== '') {
            if (cards1[index] > cards2[index]) {
                sum1 = sum1 + (cards1[index] - cards2[index]);
            } else if (cards2[index] > cards1[index]){
                sum2 = sum2 + (cards2[index] - cards1[index]);
            } else if (cards2[index] === cards1[index]) {
                console.log(`Number wars!`);
                if (cards1[index + 1] > cards2[index + 1]) { 
                    console.log(`${player1} is winner with ${sum1} points`);                   
                    break;
                } else if (cards2[index + 1] > cards1[index + 1]) {  
                    console.log(`${player2} is winner with ${sum2} points`);                  
                    break;
                } 
            } 
        }

        if (cards1[index] ===  'End of game') {
            console.log(`${player1} has ${sum1} points`);
            console.log(`${player2} has ${sum2} points`);
        }
   }
}

solve([input]);

            