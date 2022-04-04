console.log('🤜🏻🤪🤛🏻');

// for loop keep running while conditions is true
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetitions ${i}🏋🏼‍♀️🏋🏼‍♀️🏋🏼‍♀️🏋🏼‍♀️`)
};

console.clear();


const ricoArray = [
    'Ricardo',
    2023 - 1993,
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < ricoArray.length; i++) {
    console.log(ricoArray[i], typeof ricoArray[i]);
    //filling types array with ricoArray
    //types[i] = typeof ricoArray[i];
    types.push(typeof ricoArray[i]);

};

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages)

console.clear()

//2 statements for for loop.
//continue ans break 

const ricoArray2 = [
    46,
    'Ricardo',
    44,
    'levenhagen',
    'clebicar',
    2023 - 1993,
    ['Michael', 'Peter', 'Steven'],
    true
];


const ages2 = [];
// console.log('---only strings----')
// for (let i = 0; i < ricoArray2.length; i++){
//     if (typeof ricoArray2[i] !== 'string') continue;
//     ages2.push(ricoArray2[i]);
// };
// console.log(ages2)

console.log('---break with number----')

for (let i = 0; i < ricoArray2.length; i++) {
    if (typeof ricoArray2[i] !== 'number') break;
    ages2.push(ricoArray2[i]);
};
console.log(ages2);
console.clear()

const ricoArray3 = [
    'Ricardo',
    44,
    'levenhagen',
    'clebicar',
    2023 - 1993,
    ['Michael', 'Peter', 'Steven'],
    true,
];


const ages3 = [];
for (let i = ricoArray3.length - 1; i >= 0; i-- ) {
    console.log(ricoArray3[i]);
    ages3.push(ricoArray3[i]);
};
console.log(ages3);

console.clear()


for( exercise = 1; exercise < 4; exercise++){
    console.log(`supino${exercise} `);
    for( rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} - perna${rep}`)
    }
};


//while loop

let rep2 = 1;
while(rep2 <= 100){
    console.log(`While loop = Exercise  - perna ͢➡️ ${rep2}`);
    rep2++
};

console.clear()
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`wow loop ended ${dice}`)
};

