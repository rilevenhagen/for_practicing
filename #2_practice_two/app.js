
const markWeight = 78;
const marksHight = 1.69;
const johnWeight = 92;
const johnsHight = 1.95;

const markBmi = markWeight / marksHight ** 2;
const  markJohn = johnWeight / johnsHight ** 2;

const markHigherBMI = markBmi > markJohn;
console.log(markBmi);
console.log(markJohn);
console.log(markHigherBMI);

const markWeight2 = 95;
const marksHight2 = 1.88;
const johnWeight2 = 85;
const johnsHight2 = 1.76;

const markBmi2 = markWeight2 / marksHight2 ** 2;
const markJohn2 = johnWeight2 / johnsHight2 ** 2;

const johnHigherBMI = markBmi2 > markJohn2;

console.log(markBmi2);
console.log(markJohn2);
console.log(johnHigherBMI);

//practicing the simple for improvement a little of temp late literal 

const firstName = 'Ricardo';
const job = 'Web developer';
const birthday = '1900';
const year = '2050';

const ricardo = `I'm ${firstName},

I'm  ${year - birthday}

years old and 

work as ${job}...`;
console.log(ricardo)


//practicing the simple

const age = 14
// const isOldEnough = age >= 18; ou da maneira que coloquei no if

if (age >= 18){
    alert('Yes she is old enough🚗🚗🚗🚗🚗👀')
    console.log(`Sarah can start driving license 🚗🚗🚗👀`)
} else {
    console.log(`Sarah can't start driving license 👀🚗👀🚗👀🚗👀`)
}


//iff and else

const birthYear = 2020;
let century;
if (birthYear  <= 2000){
    century = 20;
} else {
    century = 21;
};
console.log(century)