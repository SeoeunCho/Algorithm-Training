// function solution(n) {
    
//     return fibonacci(n);
// }

// function fibonacci (n) {
//     let sum = 0;
//     let prevNum = 0;
//     let nextNum = 1;
//     for (let i = 1; i < n; i++) {
//         sum = prevNum + nextNum;
//         prevNum = nextNum;
//         nextNum = sum;
//     }
//     console.log(prevNum, nextNum, sum);

//     return sum % 1234567;
    
// }

function solution(n) {

    const Fibonacci = Array.from({length: n + 1}).fill(0n);
    if (n === 0 || n === 1)
        return n;

    Fibonacci[0] = 0n; // 안해도 되지만 명시
    Fibonacci[1] = 1n;

    for (let i = 2; i <= n; i++)
        Fibonacci[i] = Fibonacci[i - 2] + Fibonacci[i - 1];

    return Fibonacci[n] % 1234567n;
}