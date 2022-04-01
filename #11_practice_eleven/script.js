console.log('🤜🏻🤪🤛🏻')

//refreshing with the basics of objects to be able to practice and improve //

const rico = [
    'Ricardo',
    2037 - 1991,
    'web dev',
    ['luca', 'Matteo', 'Nicholas'],
];

console.log(rico);

const ricardo = {
    firstName: 'Ricardo',
    lastName: 'Levenhagen',
    age: 2037 - 1991,
    job: 'web dev',
    friends: ['Luca', 'Matteo', 'Nicholas']
};
console.log(ricardo);
console.log(ricardo.friends); //dot '.' notation
console.log(ricardo['friends']); //bracket notation

const nameKey = 'Name';
console.log(ricardo['first' + nameKey]);
console.log(ricardo['last' + nameKey]);

const interestedIn = prompt('what do you want to know about Ricardo? Chose between firstName, lastName, age, job and friends');

if (ricardo[interestedIn]){
    console.log(ricardo[interestedIn])
} else {
    alert('refresh and try again one of the options')
};

ricardo.location = 'Brazil';
ricardo['twitter'] = '@levenhagen';
console.log(ricardo)

//a little more

console.log(`${ricardo.firstName} has ${ricardo['friends'].length} fiends, and his best friend is called ${ricardo.friends[0]}`);

//======================================

const ricardo2 = {
    firstName: 'Ricardo',
    lastName: 'Levenhagen',
    birthYear: 1991,
    job: 'web dev',
    friends: ['Luca', 'Matteo', 'Nicholas'],
    hasDriversLicense: true,

    calcAge: function(birthYear){
        return 2037 - birthYear;
    },

    //let's keep DRY

    calcAge2: function () {
        console.log(this)
        return 2037 - this.birthYear;
    },

    //store the property

    calcAge3: function () {
        this.age =  2037 - this.birthYear;
        return this.age
    },

    getSummary2: function () {
        return `${this.firstName} is a ${this.calcAge3()}-years old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    },

    getSummary: function () {
        if (this.hasDriversLicense === true){
            return `driver's license`;
        } else {
            return `wow no, no driver's license`;
        }
    }

};

console.log(ricardo2.calcAge(1991));
console.log(ricardo2['calcAge'](1991));

//let's keep DRY//

console.log(ricardo2.calcAge2());
console.log(ricardo2['calcAge2']());

console.clear()
console.log(ricardo2.calcAge3());
console.log(ricardo2.age);

console.log(`${ricardo2.firstName} is a ${ricardo2.calcAge2()}-years old, and he ${ricardo2.getSummary()} 🚗🚗🚗🚗!!!`)

console.log(ricardo2.getSummary2());

