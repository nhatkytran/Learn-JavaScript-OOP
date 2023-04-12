'use strict';

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
