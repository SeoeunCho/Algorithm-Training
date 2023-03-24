function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n); // 제곱근을 반환
    if (x % 1 === 0) {
        answer = Math.pow(x + 1, 2); // Math.pow(base=제곱 할 수, exponent=제곱수)
    } else {
        answer = -1;
    }
    return answer;
}

// 삼항연산자
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}