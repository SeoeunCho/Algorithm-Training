function solution(numLog) {
    let answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        let calc = numLog[i] - numLog[i - 1];
        if (calc === 1) {
            answer += 'w';
        } else if (calc === -1) {
            answer += 's';
        } else if (calc === 10) {
            answer += 'd';
        } else {
            answer += 'a';
        }
    }
    
    return answer;
}