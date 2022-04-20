'use strict';

console.log('🤜🏻🤪🤛🏻');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //don't forget the {} inside of () ⤵️
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log('☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️');
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and , ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
    console.log('☃️☃️☃️☃️☃️☃️☃️☃️☃️☃️');
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Lets do some pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//spread, because is on the Right side of the operator
//1 destructuring
console.log('🎯, 🎯, 🎯, 🎯, 🎯, 🎯, 🎯, 🎯, ');
const arr1 = [1, 2, ...[3, 4]];

const [i, n, ...others] = [8, 9, 3, 4, 5, 6];

console.log(i, n, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//object with rest pattern
const { sat, ...weekDays } = { ...restaurant.openingHours };

console.log(weekDays);

// *2 functions
console.log('🦖 🦖 🦖 🦖 🦖 🦖 🦖 🦖');
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const t = [23, 5, 7];
add(...t);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('onions');

console.log('🦖 🦖 🦖 🦖 🦖 🦖 🦖 🦖');

console.log('🎯, 🎯, 🎯, 🎯, 🎯, 🎯, 🎯, 🎯');
/* 
const ingredient = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt("let's make pasta! Ingredient 2?"),
  prompt("let's make pasta! Ingredient 3?"),
];
//using a spread operator
console.log('🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝');
console.log(ingredient);

restaurant.orderPasta(...ingredient);
*/

//object
const newRestaurant = { foundedIn: 2020, ...restaurant, founder: 'Barbara' };

console.log(newRestaurant);

console.log('🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝');
const restaurantCopy = { ...newRestaurant };
restaurantCopy.name = 'Novo restaurante';
console.log(newRestaurant);
console.log(restaurantCopy);

//==============
console.log('🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

//destructure array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring the array
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log('-----------------');
console.log(main, secondary);

//switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('-----------------');
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log('-----------------2');
console.log(main, secondary);

console.log('-----------------3');
console.log(restaurant.order(2, 0));
//now deconstruction
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

//default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//object destructure use {}

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName);
console.log(hours);
console.log(tags);
console.log('========================');

//default values

const { menu = [], starterMenu: starters = [] } = restaurant; //menu don'e exist on the object

console.log(menu, starters);

//==============================

console.log('============');

//mutating variables

let w = 111;
let u = 999;
const obj = { w: 23, u: 7, t: 14 };
console.log(w, u);
({ w, u } = obj);
console.log(w, u);

//nested objects

const {
  fri: { open: o, close: d },
} = openingHours;
console.log(o, d);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//==========================

// console.clear();/==========================/==========================

//Spread operator

const theArray = [7, 8, 9, 10];

const badNewArray = [1, 2, theArray[0], theArray[1], theArray[2], theArray[3]];
console.log(badNewArray);

const newArray = [1, 2, ...theArray];
console.log(newArray);

console.log(...newArray, ...theArray);

const newMenu = [...restaurant.mainMenu, 'Pasta Arabiata'];

console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);

//join 2 arrays

const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);

// Interables: arrays, strings, maps, sets. But NOT objects

const str = 'Nicholas';
const letters = [...str, ' ', 'M.'];
console.log(letters);

console.log('🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞');
//=============================
// use any data type, return any data type => short-circuiting = is the first operator is truthy it will immediately returned the first or the last one if all are falsy

console.log(3 || 'Ricardo');
console.log('' || 'Ricardo');
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hallo' || 23 || null);
console.log('🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞🐞');

restaurant.numGuests = 10;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests || 10;

console.log(guest2);

console.log('-----AND OPERATOR------');
//the && will returned the first falsy value or the last one if all of them are truthy

//the AND operator returned the first falsy value
console.log(0 && 'Ricardo');
console.log(7 && 'Ricardo');
console.log('hello' && 23 && null && 'Ricardo');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('spinach', 'mushrooms');

console.log('🦉🦉🦉🦉🦉🦉 nullish coalescing operator 🦉🦉🦉🦉🦉🦉');
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);
// nullish values are null and undefined(not 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
