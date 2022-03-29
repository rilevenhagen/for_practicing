const markWeight = 95;
const marksHight = 1.88;
const johnWeight = 85;
const johnsHight = 1.76;

const markBmi = markWeight / marksHight ** 2;
const markJohn = johnWeight / johnsHight ** 2;

const markHigherBMI = markBmi > markJohn;
if (markBmi > markJohn) { console.log(`Mark's BMI is higher than John's!! Mark's BMI ${markBmi}!! `)
} else { 
   console.log(`John's BMI is higher than Mark's!! John's BMI" ${markJohn} `)
   }

   //conversion 
   const inputYear = '1991';
   console.log(inputYear + 18);   
   console.log(Number(inputYear)  + 18) //Number() convert string in number

   const newNumber = Number(inputYear) + 18;
   const newString = String(newNumber);
   console.log(newString);

   // coercion
console.log(`I am ` + 20 + ` years old`); // automaticamente transforma o 20 em string, o mais faz mudar para string
console.log('23' - '10' - 3) // the '-' operator triggers the opposite conversion, string are converted to numbers   

console.log('22' * '2')
console.log('22' / '2')

let n = '1' + 1; // isso seria 11
n = n - 1; // isso seria o 11 - 1 = 10
console.log(n)


console.log('10' - '4' - '3' - 2  + '5') // com o sinal de - turo vira numero que da 3 nenos o 2 mas o + so coloca o 5 ao lado, pois o + com o streeng ele so coloca um ao lado do otro.


// there is 5 falsy values: 0, '', undefined, null Nan
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('ricardo'))
console.log(Boolean({}))
console.log(Boolean(''))



const money = 0;

if(money){
   console.log('you are near to be brook')
} else {
   console.log('get a job')
};

let height;

// height = 100;

if(height) {
   console.log('is defined')
} else {
   console.log('is undefined')
}



const newAge = 18;
if (newAge === 18) console.log('yeeee you are an adult (strict)');

if (newAge == 18) console.log('yeeee you are an adult (loose)');

/* 
const userNumber = Number(prompt('What is your number'));
console.log(userNumber);

if (userNumber === 23) {
   console.log('cool 23 is your number')
} else if(userNumber === 1) {
   console.log('cool 7 is your number')
} else if (userNumber === 2) {
   console.log('cool 7 is your number')
} else if (userNumber === 3) {
   console.log('cool 7 is your number')
} else if (userNumber === 4) {
   console.log('cool 7 is your number')
} else {
   console.log('number is not 1, 2, 3, 4 or 23')
   // const userNumber = Number(prompt('What is your number'));
   // console.log(userNumber)
}
*/
console.clear()

const hasDrivesLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDrivesLicense && hasGoodVision ); //and&&
console.log(hasDrivesLicense || hasGoodVision); // or||
console.log(!hasDrivesLicense);


// if (hasDrivesLicense && hasGoodVision) {
//    console.log('She is able to drive')
// } else {
//    console.log('Someone else should to drive...')
// }

const isTired = false; // c
console.log(hasDrivesLicense || hasGoodVision || isTired)
console.log(hasDrivesLicense && hasGoodVision && isTired)

// usa-se ! para fazer ficar true porque isTire é falso e o sinal ! fia se for diferente
if (hasDrivesLicense && hasGoodVision && !isTired) {
   console.log('She is able to drive')
} else {
   console.log('Someone else should to drive...')
}