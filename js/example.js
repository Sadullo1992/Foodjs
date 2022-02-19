'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans  = prompt("Enter you number");

// const reg = /\d/g;
// console.log(ans.match(reg))

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// \D -not digit
// \W -not word


// \d -digit -raqam
// \w -so'z word
// \s -space -bo'sh joy

// i
// g
// m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"))