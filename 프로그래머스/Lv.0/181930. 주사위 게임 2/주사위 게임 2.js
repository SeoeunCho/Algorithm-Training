function solution(a, b, c) {
    const sum = a + b + c;
    const sum2 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    const sum3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    
    if (a === b && b === c) {
        return sum * sum2 * sum3;
    } else if (a === b || b === c || c === a) {
        return sum * sum2;
    } else {
        return sum;
    }
}