function solution(a, b, c) {
    const sum = a + b + c;
    
    if (a !== b && b !== c && c !== a) {
        return sum;
    } else {
        const pow2 = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
        
        if (a == b && b == c && c == a) {
            const pow3 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
            return sum * pow2 * pow3;
        } else {
            return sum * pow2;
        }
        
    }
}