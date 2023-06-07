function solution(n) {
    return fibonacci(n);
}

function fibonacci (n) {
    let sum = 0n;
    let prevNum = 0n;
    let nextNum = 1n;
    for (let i = 1; i < n; i++) {
        sum = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = sum;
    }
    console.log(prevNum, nextNum, sum);

    return sum % 1234567n;
}

// BigInt MDN
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt