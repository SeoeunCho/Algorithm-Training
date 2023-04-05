function solution(k, m, score) {
    // 이익이 발생하지 않는 경우
    if(score.length < m) return 0;
    
    score.sort((a, b) => a - b);
    
    let total = 0;
    while(score.length >= m){
        let box = score.splice(score.length - m, m);
        let price = m * box[0];
        
        total += price;
    }
    
    return total;
}