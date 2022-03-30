'use strict';

let hasDriversLicense = false;
const passTest = true;

// const private = 1;
// console.log(private)

function logger (){
    console.log('🤯🤯🤯🤯🤯🤯🤯🤯');
};

//calling // running // invoking the function
logger();

function foodProfessor (apple, oranges){
    console.log(apple, oranges)
    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
};

//quardar o que retornou da 'function' na variavel e faz um 'console.log'
const appleJuice = foodProfessor(5, 6);
console.log(appleJuice);

const appleJuice2 = foodProfessor(8, 9);
console.log(appleJuice);

//function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear
};

const age1 = calcAge1(1991)
console.log(`your age is ${age1}`);

//function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);




//arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const arrowFunction = calcAge3(1991)
console.log(arrowFunction);

const yearUntilRetainment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retainment = 65 - age;
    // return retainment
    return `${firstName} retires in ${retainment
} years!!!`
};

const yearsToRetainment = yearUntilRetainment(1991, 'Ricardo');
const yearsToRetainment2 = yearUntilRetainment(2009, 'Luca');
const yearsToRetainment3 = yearUntilRetainment(2013, 'Matteo');

console.log(yearsToRetainment);
console.log(yearsToRetainment2);
console.log(yearsToRetainment3);



//================================


function cutFruit(fruit){
    return fruit * 4;
}

function foodProfessor2(apple, oranges) {
    const applePieces = cutFruit(apple)
    const orangesPieces = cutFruit(oranges)
    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
};

console.log(foodProfessor2(2, 3));
console.clear();
// ================================================

const now = new Date();
const currentYear = now.getFullYear()

const calcAges = function(birthYear) {
    return currentYear - birthYear;
}

const yearsLeftRetainment = function (age) {
    return 65 - age;
}

const yearUntilRetainment2 = function (birthYear, firstName) {
    const age = calcAges(birthYear);
    const retainment = yearsLeftRetainment(age);
    if (retainment > 0) {
    return `${firstName} retires in ${retainment
} years!!!`
    } else {
        console.log('🤪 done 🤪');
        return -1 ;
        console.log('done'); // nao sera mostrado pois para o return
    }
};


console.log(yearUntilRetainment2(2009, 'Luca')); 
console.log(yearUntilRetainment2(2013, 'Matteo'));
console.log(yearUntilRetainment2(2013, 'Nicholas'));
console.log(yearUntilRetainment2(1008, 'Isabela'));

