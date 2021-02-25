'use strict';
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1990);
// console.log(jonas);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(jack instanceof Person);
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge()
console.log(Person.prototype);
console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));