const erkam = {
    firstName: 'Erkam',
    lastName: 'Sis',
    birthYear: 1994,
    job: 'physicist',
    friends: ['Sefer', 'Abdullah', 'Umut'],
    hasDriverLicense: false,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // };

    // calcAge: function () {
    //     console.log(this);
    //     return 2024 - this.birthYear;
    // };

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${erkam.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(erkam.calcAge());

console.log(erkam.age);

console.log(erkam.getSummary());

