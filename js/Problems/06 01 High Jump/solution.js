window.onload = function() {
    //dom not only ready, but everything is loaded
    let inputTest = [

        /* 
        
        231,
        205,
        212,
        213,
        228,
        229,
        230,
        235,
                
        */
        
        //

        250,
        225,
        224,
        225,
        228,
        231,
        235,
        234,
        235,
    
    ];
    
    function solve(inputTest) {
        
        let input = inputTest.filter(i => i !== '');
        //console.log(input);

        let high = input[0];
        input.shift();

        let start = high - 30;
        let count = 0;
        let pass = true;

        while (start <= high) {
            for (let index = 1; index <= 3; index++) {
                let current = input[0];
                input.shift();
                count++;

                if (current > start) {
                    start = start + 5;
                    break;
                }

                if (index === 3) {
                    console.log(`Tihomir failed at ${current}cm after ${count} jumps.`);
                    pass = false;
                }
            }
            if (pass === false) {
                break;
            }
        }

        if (pass === true) {
            console.log(`Tihomir succeeded, he jumped over ${high}cm after ${count} jumps.`);            
        }
    };
    
    solve(inputTest);
};
