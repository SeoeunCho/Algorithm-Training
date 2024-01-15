function solution(n) {
    /* 초기풀이
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let arr = Array(n);
        
        for (let j = 0; j < n; j++) {
            if (i === j) {
                arr[j] = 1;
            } else {
                arr[j] = 0;
            }
        }
        answer.push(arr);
    }
    */
    
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        answer[i][i] = 1;
    }
    
    return answer;
}