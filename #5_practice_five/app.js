const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case "tuesday":
        console.log('Prepare theory videos');
        break;
    case "Wednesday":
    case "Thursday":
        console.log('Write code examples');
        break;
    case "Friday":
        console.log('Record videos');
        break;
    case "saturday":
    case "sunday":
        console.log('Enjoy the weekend 😜'); 
        break;
        default:
        console.log('🚨🚨Not a valid day🚨🚨')  
};


if (day === 'monday'){
    console.log('(if block) Plan course structure');
    console.log('(if block) Go to coding meetup');
} else if (day === "tuesday") {
    console.log('(if block) Prepare theory videos');
} else if (day === "Wednesday" || day === "Thursday") {
    console.log('(if block) Write code examples');
} else if (day === "Friday") {
    console.log('(if block) Record videos');
} else if (day === "saturday" || day === "sunday"){
    console.log('(if block) Enjoy the weekend 😜');
} else (console.log('(if block) 🚨🚨Not a valid day🚨🚨'));

//====================

const age = 13;
age >= 18 ? console.log('You can drink wine 🍷') : console.log('no need to drink water 💦');

const age2 = 23;
age2 >= 18 ? console.log('You can drink wine 🍷') : console.log('no need to drink water 💦');

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

let drink3;
if(age >= 18){
    drink3 = 'wine 🍷'
} else {
    drink3 = 'water 💦'
};
console.log(drink3);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦' }`);

