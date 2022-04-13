'use strict';

//Reviewing a bit of scope

console.log('🤜🏻🤪🤛🏻');

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    //creating NEW variable with same name as outer scope's variable
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      const firstName = 'Ricardoooo';

      //reassing outer scope's variable
      output = `NEW OUTPUT`;

      const str = `Oh, and you are a millennial, ${firstName}`;
      console.log(str);

      function addOn(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    //console.log(addOn(2, 3)); //error out of scope
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Ricardo';

calcAge(1991);

console.clear();

//================================================================

console.log(me);
// console.log(job); //error declare before define
// console.log(year);//error declare before define

var me = 'Ricardo';
let job = 'Web Dev';
const year = '2007';

console.log(me);
console.log(job);
console.log(year);

//function
//function declaration is the oly one we can declare before
console.log(addDeclaration(2, 3));
//console.log(addExpression(2, 3)); //error declare before define
// console.log(addArrow(2, 3)); //error declare before define

function addDeclaration(a, b) {
  return a + b;
}

function addExpression(a, b) {
  return a + b;
}
console.log(addExpression(2, 3));

const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

console.clear();
//================================================================

//a little bit, why not use 'var'

var addArrow2 = (a, b) => a + b;
console.log('🤜🏻🤪🤛🏻');
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!!!🤯 ');
}
console.log('🤜🏻🤪🤛🏻');
let numProducts2 = 10;
if (!numProducts2) deleteShoppingCart();

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.clear();
//================================================================
console.log(this);

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1991);

const calcAge3 = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge3(1991);

const eu = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};
eu.calcAge();

const matilda = {
  year: 1992,
};

matilda.calcAge = eu.calcAge;
console.log('1');

matilda.calcAge();
console.log('2');

console.log(matilda);
console.log('3');

const f = eu.calcAge;
f();

console.clear();
//================================================================

const rico = {
  firstName: 'rico',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //solution 2

    const self = this; // self or that
    const isMillennial2 = function () {
      console.log('1111111');
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    //solution 2
    const isMillennial = () => {
      console.log('this');
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
    isMillennial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
    //do not use 'this' on a arrow function
  },

  greet2: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
    //do not use 'this' on a arrow function
  },

  greet3: () => console.log(`Hey ${rico.firstName}`),
};

rico.calcAge();
console.log('1');
rico.greet();

console.log('2');
rico.greet2();

console.log('3');
rico.greet3();

console.clear();
//================================================================
// argument keywords

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrowT = (a, b) => {
  // console.log(arguments);
  // console.log('arguments');
  let me = 40;
  return a + b + me;
};
console.log(addArrowT(10, 20));

const aaa = (a, b) => {
  let chuck = 42;
  return a + b + chuck;
};

console.log(aaa(2, 2));

console.clear();
//================================================================

let age = 30;
let aldAge = age;
age = 31;
console.log(age);
console.log(aldAge);

const luca = {
  name: 'Luca',
  age: 12,
};
console.log('Luca:', luca);

const friend = luca;

friend.age = 13;
console.log('Luca:', luca);
console.log('Friend:', friend);

console.clear();
//================================================================

// primitive tipes
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldlastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
console.log('**Before the marriage', jessica);

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
marriedJessica.age = 30;

console.log('Before the marriage', jessica);
console.log('After marriage', marriedJessica);

//coping objects to a new one

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//Object.assign({}) do a shallow copy, use a external library like lo-Dash
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';
jessicaCopy.age = 30;

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');

console.log('coping objects');
console.log('Before the marriage', jessica2);

console.log('After marriage', jessicaCopy);
