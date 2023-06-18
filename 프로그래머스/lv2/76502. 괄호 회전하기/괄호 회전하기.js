function solution(s) {
    let result = 0;
    const stack = [];
    if (s.length % 2 === 1) return 0;
    
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        let isRight = true;
        
        for (const word of str) {
            if (word === '(' || word === '{' || word === '[') {
                stack.push(word);
            }
            else {
                let leftWord = stack.pop();
                if (leftWord === '(' && word === ')') continue;
                if (leftWord === '{' && word === '}') continue;
                if (leftWord === '[' && word === ']') continue;
                isRight = false;
                break;
            }
        }
        
        if (isRight) result++;
    }
    return result;
}