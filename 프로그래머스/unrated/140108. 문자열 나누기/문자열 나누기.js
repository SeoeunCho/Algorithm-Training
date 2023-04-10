function solution(s) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        let same = stack.filter(x => x === stack[0]);
        let notSame = stack.filter(x => x !== stack[0]);
        
        if (same.length === notSame.length) {
            count++;
            stack = [];
        }
    }
    if (stack.length !== 0) count++;
    return count;
}