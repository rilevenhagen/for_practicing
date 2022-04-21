'use strict';

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
};
console.log('🤜🏻💥🤛🏻');

const rest1 = {
  name: 'Pizza to go',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: `Barb's food`,
  owner: `Barbara`,
};

//'OR' assignment operator, this operator assigns a value to a variable if tha variable is currently falsy

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

const or1 = (rest1.numGuests ||= 10);
const or2 = (rest2.numGuests ||= 10);
console.log(or1);
console.log(or2);

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= `<anonymous>`;
rest2.owner &&= `<anonymous>`;

console.log(rest1);
console.log(rest2);
