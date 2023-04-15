'use strict';

console.log('Start');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');

console.log(res);

const data = await res.json();

console.log(data);
