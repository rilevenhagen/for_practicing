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
