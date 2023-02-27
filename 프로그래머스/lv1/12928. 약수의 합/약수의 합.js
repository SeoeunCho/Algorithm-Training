function solution(n) {
    let arr = [];
    for (i = 0; i <= n; i++) {
        if (n % i === 0) arr.push(i);
    }
    let sum = arr.reduce((pre, cur) => pre + cur, 0);
    return sum;
}