// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let string = input[1];

let answer = 0;

for (let x of string) {
    answer += Number(x);
}

console.log(answer);