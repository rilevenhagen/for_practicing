console.log('🤜🏻🤪🤛🏻');

const friends = ['Michel', 'Pedro', 'Steve', 'Peter', 'Marc'];

console.log(friends);

const newArray = [1991, 1992, 1993, 1994];

console.log(friends[0]);
console.log[friends[2]];

console.log(friends.length)
console.log(newArray.length)
console.log(friends[friends.length - 1])

console.log(friends);
friends[2] = 'eu' //subtituir um elemento na array
console.log(friends);

const name = 'Ricardo';
const ricardo = [name, 'Levenhagen', 2049 - 2022, friends];

console.log(ricardo);

const calcAge = function (birthday) {
    return 2022- birthday
};

const year =  [1990, 1967, 2002, 2018];

// calculating age the hard and time-consuming way
const age1 = calcAge(year[0])
const age2 = calcAge(year[1])
const age3 = calcAge(year[2])
console.log(age1, age2, age3)

const age0 = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(age0);

console.clear();
// usando o foreach ;)

const age = year.forEach(element => {
    const theAge = 2022 - element;
    return theAge
});


const friends2 = ['Michel', 'Pedro', 'Steve', 'Peter', 'Marc'];
console.log(friends2)
friends2.push('Jay'); //add to the end
console.log(friends2)

const newLenght = friends2.push('Rico'); // return the lenght of the array 
console.log(newLenght);

friends2.unshift('Luca'); //add to the biggings of the array 
console.log(friends2)

//remove elemntes
friends2.pop(); //last
console.log(friends2.pop())
console.log(friends2)

friends2.shift(); //first
console.log(friends2.shift())
console.log(friends2)

console.log(friends2.indexOf('Pedro'));
console.log(friends2.indexOf('Peter'));
console.log(friends2.indexOf('Pedros'));

friends2.push(23);
console.log(friends2.includes('bob'));
console.log(friends2.includes('Pedro'));
console.log(friends2.includes('23'));
console.log(friends2.includes(23));

if (friends2.includes('Peter')){
    console.log('Hi my friend Peter')
};



