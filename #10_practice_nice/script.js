console.log('🤜🏻🤪🤛🏻')
//reviewing array to practice, starting with the most laborious and writing lots of code without simplifying and using loop

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
const tip15 = 0.15;
const tip20 = 0.20;

// const total = bill1 <= 300 ? bill1 * tip15 + bill1 : bill1 * tip20 + bill1;

// const tip2 = bill1 <= 300 ? tip15 : tip20;
// const tipValue = bill1 <= 300 ? bill1 * tip15 : bill1 * tip20;

// console.log(`The bill was ${bill1} , the tip was ${tip2 * 100}% tip value is ${tipValue}, and the total value ${total}!!!!`);
// console.clear();

//or 

// const tip = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.2 : bill2 * 0.15;

// console.log(`The bill was ${bill2}, teh tip was ${tip}, and the total value is ${bill2 + tip}`);




/* 
a batter way to do const calcTip = function (bill) { 
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
*/

const billArray = [125, 555, 44];


const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300 ){
        return (bill * tip15)
    } else {
        return (bill * tip20)
    };
};



const tipsArray = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])];

const totalArray = [tipsArray[0] + billArray[0], tipsArray[1] + billArray[1], tipsArray[2] + billArray[2],]
console.log(billArray)
console.log(tipsArray)
console.log(totalArray)

