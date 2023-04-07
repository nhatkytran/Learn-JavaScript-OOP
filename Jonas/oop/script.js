'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Bad pratice
  this.calcAge = function () {
    return 2037 - this.birthYear;
  };
};

const p = new Person('Frlix', 2002);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

console.log(arr.__proto__ === Array.prototype); // true
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
