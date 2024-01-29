// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = Math.max(...scores);

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += scores[i] / max * 100;
}

console.log(sum / n);