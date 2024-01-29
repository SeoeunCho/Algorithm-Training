let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let useTime = Number(input[1]);

let totalMinute = a * 60 + b + useTime;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(`${hour} ${minute}`);