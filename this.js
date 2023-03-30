'use strict';

// this - Regular Function v/s Arrow Function

function test() {
  console.log(this); // undefined
}

const test = () => {
  console.log(this); // Window
};

function test() {
  console.log(this); // undefined

  const a = () => {
    console.log(this); // undefined
  };

  a();
}

test();

// this - Regular Function and Arrow Functiona in an object

const a = {
  b() {
    console.log(this); // a
  },
  c: () => {
    console.log(this); // Window
  },
};

a.b();
a.c();

// this - Regular function and Arrow funciton in class Syntax

class Student {
  method1() {
    console.log(this); // Student {}
  }
  method2 = () => {
    console.log(this); // Student {}
  };
}

// class is just a syntatic sugar syntax for constructor function

function Student() {
  // At createtion phase: this --> Student {}

  this.method1 = function () {
    console.log(this); // Student {}
  };
  this.method2 = () => {
    console.log(this); // Student {}
  };
}

// When dealing with prototype --> Remember Closure

function Student(name) {
  this.name = name;

  this.method1 = function () {
    console.log(this);
  };
  this.method2 = () => {
    console.log(this);
  };
}

const s = new Student('Frlix');

console.log(s); // Student { name, method1, method2 }

s.method1(); // this --> s
s.method2(); // this --> s --> Closure --> this of function Student --> Student {}

Student.prototype.a = function () {
  console.log(this);
};
Student.prototype.b = () => {
  console.log(this);
};

console.log(Student.prototype); // { a, b, constructor }

// Student.prototype is just an object, not a constructor function
s.a(); // this --> s
s.b(); // this --> Window

// class - Syntatic Sugar Syntax

class Student {
  method1() {
    console.log(this);
  }
  method2 = () => {
    console.log(this);
  };
}

const s2 = new Student();

// class automatically uses prototype
// arrow function not stored in prototype because of this keyword

console.log(Student.prototype); // { method1 }

s2.method1(); // this --> s2 { method2 }
s2.method2(); // this --> s2 { method2 }

Student.prototype.a = function () {
  console.log(this);
};
Student.prototype.b = () => {
  console.log(this);
};

console.log(Student.prototype); // { method1, a, b }

s2.a(); // this --> s2 { method2 }
s2.b(); // Window
