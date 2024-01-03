function solution(n, k) {
    let answer = 0;
    n = n.toString(k).split('0');
    
    for (let i = 0; i < n.length; i++) {
        if (isPrimeNumber(Number(n[i]))) answer++;
    }
    
    return answer;
}

function isPrimeNumber(number) {
    if (number <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}