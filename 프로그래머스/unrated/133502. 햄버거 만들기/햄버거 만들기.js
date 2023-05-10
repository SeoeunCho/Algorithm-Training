function solution(ingredient) {
    let count = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length < 4) continue;
        
        if (stack[stack.length - 4] === 1 && 
            stack[stack.length - 3] === 2 && 
            stack[stack.length - 2] === 3 && 
            stack[stack.length - 1] === 1) {
            for (let j = 0; j < 4; j++) {
                stack.pop();
            }
            count++;
        }
    }
    return count;
}




/* 시간초과 오답
function solution (ingredient) {
    let answer = 0;
    
    let i = 0;
    let len = ingredient.length;
    while (len >= 4 && i < len) {
        if (ingredient[i] === 1 && 
            ingredient[i + 1] === 2 && 
            ingredient[i + 2] === 3 && 
            ingredient[i + 3] === 1) {
            ingredient.splice(i, 4);
            answer++;
            i = 0;
        } else {
            i++;
        }
    }
}*/