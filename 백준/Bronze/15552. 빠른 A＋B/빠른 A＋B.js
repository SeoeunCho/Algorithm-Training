// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let t = Number(input[0]);

/** 빠르게 출력하기 위해 하나의 변수에 정보를 담은 뒤에 한꺼번에 문자열을 출력!
1. 한 줄(line)을 출력할 때마다 console.log()를 수행하면 많은 시간이 소요된다.
2. 모든 '줄(line)'에 대한 정보를 하나의 변수에 담았다가 한꺼번에 출력한다. */

let answer = '';

for (let i = 1; i <= t; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    answer += (a + b) + '\n';
}

console.log(answer);