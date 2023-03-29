function solution(t, p) {
    let answer = 0;
    let arr = [];
    
    for (let i = 0; i < t.length; i++) {
        let arr = t.slice(i, i + p.length);
        if (arr.length === p.length && arr <= p) answer++
    }
    
    return answer;
}