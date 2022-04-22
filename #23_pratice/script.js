console.log('🤜🏻🤪🤛🏻');
('use strict');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(`No menu de hoje teremos  ${item}`);

for (const [i, el] of menu.entries()) {
  //use destructure
  console.log(`${[i + 1]} :${el}`);
}
// console.log([...menu.entries()]);

//Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with Optional Chaining
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);

//exemple
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  //   console.log(day);
  //if we use OR '||' saturday will be closed because of the 0
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array

const user = [{ name: 'Ricardo, email: hello@ricardo.io' }];
const user2 = [];
console.log(user[0]?.name ?? 'User array empty');
console.log(user2[0]?.name ?? 'User array empty = less code');
//more code ⤵️  less code⬆️
if (user2.length > 0) console.log(user2[0].name);
else console.log('User array empty = more code ');
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
