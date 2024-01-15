function solution(n) {
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
    
    return answer;
}