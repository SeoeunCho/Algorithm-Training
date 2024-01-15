function solution(numLog) {
    let answer = '';
    
    /* 초기풀이
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
    */
    
    const convert = {
        '1': 'w', 
        '-1': 's', 
        '10': 'd', 
        '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('');
}