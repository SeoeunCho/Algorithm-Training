function solution(n, a, b) {
    let answer = 1;

    for (let i = 1; i <= n; i++) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        if (a === b) break;
        else answer++;
        console.log(a, b);
    }
    
    return answer;
}