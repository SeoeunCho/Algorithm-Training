53
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    result += i;
}

console.log(result);