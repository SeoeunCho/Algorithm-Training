// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let testCases = Number(input[0]);

for (let i = 1; i <= testCases; i++) {
    let data = input[i].split(' ').map(Number);
    let n = data.shift(); // 학생 수
    
    let average = data.reduce((a, b) => a + b) / n;
    let count = data.filter(el => el > average).length; // 평균 넘는 학생 수
    
    // 점수가 평균을 넘는 학생의 비율을 소수점 아래 셋째 자리까지 출력
    console.log(`${(count / n * 100).toFixed(3)}%`);
}