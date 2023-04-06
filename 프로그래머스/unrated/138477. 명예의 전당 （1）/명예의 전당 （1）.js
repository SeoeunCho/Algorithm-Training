function solution(k, score) {
    var answer = [];
    let arr = [];
    let min = 0;
    
    for (let i = 0; i < score.length; i++) {
        arr.push(score[i]);
        arr.sort((a, b) => a - b);
        if (i >= k) arr.shift();
        
        answer.push(Math.min(...arr));
    }
    
    return answer;
}