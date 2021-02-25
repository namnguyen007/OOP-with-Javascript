'use strict';
  const Person = function(firstName, birthYear) {
   // Instance properties
   this.firstName = firstName;
   this.birthYear = birthYear;
   // Instance method (this is very bad practice)
   // imagine 1000 instances copying the same method like this everywhere
   this.calcAge = function() {
    console.log(2037 - this.birthYear);
   }
  }

  const jonas = new Person('Jonas', 1990);
  // console.log(jonas);
  const matilda = new Person('Matilda', 2017);
  const jack = new Person('Jack', 1975);
  // console.log(jack instanceof Person);
