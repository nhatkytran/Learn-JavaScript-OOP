'use strict';

class Person {
  static study() {
    console.log(this);
    console.log('Learn Computer Science');
  }
}

console.dir(Person);
Person.study();
