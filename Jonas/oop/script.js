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

// Object.create

const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },
};

const ajax = Object.create(PersonProto);

ajax.birthYear = 2002;

// Inheritance - Function Constructors

const Student = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Student.prototype.studyMath = function () {
  console.log('Math is cool!');
};

const CodingStudent = function (firstName, birthYear, language) {
  Student.call(this, firstName, birthYear);
  this.language = language;
};

// CodingStudent.prototype.__proto__ = Student.prototype;
// Object.setPrototypeOf(CodingStudent.prototype, Student.prototype);

// Using Object.create --> need to add constructor manually
// Using Object.create is good for performace instead of using setPrototype of at some points
CodingStudent.prototype = Object.create(Student.prototype);
CodingStudent.prototype.constructor = CodingStudent;

CodingStudent.prototype.sutdyCoding = function () {
  console.log('Coding is cool!');
};

console.log(new CodingStudent('Ajaxander', 21, 'JavaScript'));

// Inheritance - ES6 Classes

class StudentClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  introduce() {
    return `My name is ${this.firstName}. I am ${
      new Date().getFullYear() - this.birthYear
    } years old`;
  }
}

class CodingStudentClass extends StudentClass {
  constructor(firstName, birthYear, language) {
    super(firstName, birthYear);
    this.language = language;
  }

  loveCodeing() {
    return `${this.language} is so cool!`;
  }
}

const sl = new CodingStudentClass('Ajaxander', 2002, 'JavaScript');

console.log(sl);

// If don't need any new property, no need to define a constructor funciton \
// in a Child class because the constructor function is inherited from Parent function

// Inheritance - Object.create

const StudentCreate = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  introduce() {
    return `My name is ${this.firstName}. I am ${
      new Date().getFullYear() - this.birthYear
    } years old`;
  },
};

const CodingStudentCreate = Object.create(StudentCreate);

CodingStudentCreate.init = function (firstName, birhtYear, language) {
  CodingStudentCreate.__proto__.init.call(this, firstName, birhtYear);
  this.language = language;
};

CodingStudentCreate.loveCoding = function () {
  return `${this.language} is so cool!`;
};

const sc = Object.create(CodingStudentCreate);

sc.init('Ajaxander', 2002, 'JavaScipt');

console.log(sc);

console.log(sc.introduce());
console.log(sc.loveCoding());
