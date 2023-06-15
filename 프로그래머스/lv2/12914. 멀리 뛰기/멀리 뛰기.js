// 피보나치수를 이용한 풀이
function solution(n) {
    return fibonach(n) % 1234567n;
}

function fibonach(n) {
    let sum = 0n;
    let prevNum = 0n;
    let nextNum = 1n;
    
    for (let i = 1; i <= n; i++) {
        sum = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = sum;
    }
    return sum;
}