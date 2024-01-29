// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let arr = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

for (let i = 0; i < 10; i++) {
    mySet.add(arr[i] % 42); // 중복된 원소는 추가적으로 삽입되지 않는다.
}

console.log(mySet.size);