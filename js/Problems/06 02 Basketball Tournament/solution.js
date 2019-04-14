window.onload = function() {
    //dom not only ready, but everything is loaded
    let inputTest = [

        'Dunkers',
        2,
        75,
        65,
        56,
        73,
        'Fire Girls',
        3,
        67,
        34,
        83,
        98,
        66,
        45,
        'End of tournaments'
    
    ];
    
    function solve(inputTest) {
        let input = inputTest.filter(i => i !== '');

        let current = input[0];
        input.shift();

        let win = 0;
        let lose = 0;

        while (current !== 'End of tournaments') {

            if (isNaN(current)) {
                let counter = input[0];
                input.shift();
                
                let selfPoints = [];
                let otherPoints = [];

                for (let index = 0; index < counter * 2; index++) {
                    
                    let point = input[0];
                    input.shift();

                    if (index % 2 == 0) {
                        selfPoints.push(point);
                    } else {
                        otherPoints.push(point);
                    }
                    
                }   
                
                for (let index = 0; index < selfPoints.length; index++) {
                    let i = index + 1;
                    if (selfPoints[index] > otherPoints[index]) {                        
                        let calc = selfPoints[index] - otherPoints[index];
                        console.log(`Game ${i} of tournament ${current}: win with ${calc} points.`);
                        win++;
                    } else {
                        let calc = otherPoints[index] - selfPoints[index];
                        console.log(`Game ${i} of tournament ${current}: lost with ${calc} points.`);
                        lose++;
                    } 
                }

            }

            current = input[0];
            input.shift(); 
        };

        let winPercent = win / (win + lose) * 100;
        let losePercent = lose / (win + lose) * 100;

        console.log(`${winPercent.toFixed(2)}% matches win`);
        console.log(`${losePercent.toFixed(2)}% matches lost`);
    };
    
    solve(inputTest);
};
