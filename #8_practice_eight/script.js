// console.log('🤜🏻🤪🤛🏻');

//test 1 data
const dolphin = 44 + 23 + 71;
const koalas = 65 + 54 + 49;

//test 2 data
const dolphin2 = 85 + 54 + 41;
const koalas2 = 23 + 34 + 27;

//arrow function for the average
const calcAverage = average => average / 3;

//get the avg
const avgDolphin = calcAverage(dolphin);
const avgKoalas = calcAverage(koalas);

//get the avg
const avgDolphin2 = calcAverage(dolphin2);
const avgKoalas2 = calcAverage(koalas2);

//console.log(avgDolphin, avgKoalas)

function checkWinner(dolphin, koala) {
    if (dolphin >= 2 * koala){
        return `🏆 Dolphin win (${dolphin
} vs. ${koala})`
    } else if (koala >= 2 * dolphin) {
        return `🏆 Koala win (${koala
            } vs.${dolphin} )`
    } else {
        return `🚨 No team wins!!!! 🚨`
    };
};

console.log(checkWinner(avgDolphin, avgKoalas));

console.log(checkWinner(avgDolphin2, avgKoalas2));

console.log(checkWinner(1234, 23));
