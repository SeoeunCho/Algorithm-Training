function solution(n) {
    let answer = 0;
      
    for (let i = n; i >= 1; i--) {
        let sum = 0;
        
        for (let j = i; j >= 1; j--) {
            sum += j;

            if (sum >= n) {
                if (sum === n) answer++;
                break;
            }
        }
    }
    
    return answer;
}