function solution(X, Y) {
    let answer = '';
    X = X.split('');
    Y = Y.split('');
    console.log(X, Y);
    
    for (let i = 0; i < 10; i++) {
        const countX = X.filter(x => Number(x) === i).length;
        const countY = Y.filter(x => Number(x) === i).length;
        answer += String(i).repeat(Math.min(countX, countY));
    }
    
    if (answer === '') return '-1'
    if (Number(answer) === 0) return '0'
    
    return answer.split('').sort((a, b) => Number(b) - Number(a)).join('');
}