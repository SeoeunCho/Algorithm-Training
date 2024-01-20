let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let bArr = input[1].split('');

console.log(a * parseInt(bArr[2]));
console.log(a * parseInt(bArr[1]));
console.log(a * parseInt(bArr[0]));
console.log(a * b);