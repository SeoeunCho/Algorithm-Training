// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
const arr = input.map(x => Number(x));

let max = Math.max(...arr);
let index = arr.indexOf(max) + 1;

console.log(max + '\n' + index);