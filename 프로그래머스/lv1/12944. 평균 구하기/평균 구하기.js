function solution(arr) {
    return arr.reduce((pre, cur) => pre + cur) / arr.length;
}

// 테스트 예제
let arr = [5, 2, 3];
console.log ('평균값 : ', solution(arr));