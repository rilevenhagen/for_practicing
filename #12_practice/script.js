console.log('🤜🏻🤪🤛🏻')

// calculation of BMA = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

const john = {
    firstName: 'Jhon',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,

    johnBmi: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
};


const marks = {
    firstName: 'Marks',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,

    markBmi: function(){
        this.bmi = this.weight / this.height **2
        return this.bmi
    }
};

// console.log(marks.markBmi());
// console.log(john.johnBmi());


// we can use if to be DRY

const paraLogar = `${marks.markBmi() > john.johnBmi() ? marks.firstName : john.firstName}'s BMI ${marks.markBmi() > john.johnBmi() ? marks.markBmi() : john.johnBmi()} is higher than ${marks.markBmi() < john.johnBmi() ? marks.firstName : john.firstName}'s ${marks.markBmi() < john.johnBmi() ? marks.markBmi() : john.johnBmi()}`;



console.log(paraLogar);





const john2 = {
    firstName: 'Jhon',
    lastName: 'Smith',
    height: 1.76,
    weight: 85,

    johnBmi: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
};

const marks2 = {
    firstName: 'Marks',
    lastName: 'Miller',
    height: 1.88,
    weight: 95,

    markBmi: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
};


// we can use if to be DRY

const paraLogar2 = `${marks2.markBmi() > john2.johnBmi() ? marks2.firstName : john2.firstName}'s BMI ${marks2.markBmi() > john2.johnBmi() ? marks.markBmi() : john2.johnBmi()} is higher than ${marks2.markBmi() < john2.johnBmi() ? marks2.firstName : john.firstName}'s ${marks2.markBmi() < john2.johnBmi() ? marks2.markBmi() : john2.johnBmi()}`;



console.log(paraLogar2);