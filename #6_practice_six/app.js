
const bill = 40;
const tip15 = 0.15;
const tip20 = 0.20;


const total = bill <= 300 ? bill * tip15 + bill : bill * tip20 + bill;

const tip = bill <= 300 ? tip15 : tip20;


console.log(`The bill was ${bill} , the tip was ${tip * 100}%, and the total value ${total}!!!!`);


//===========================


const tipS = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill} , the tip was ${tipS}, and the total value ${bill + tipS}!!!!`);