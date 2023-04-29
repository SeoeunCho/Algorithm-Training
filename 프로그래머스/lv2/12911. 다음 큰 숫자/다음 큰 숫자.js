function solution(n) {
    var answer = 0;
    
    let sum = n.toString(2).split('').filter(x => x === '1').length;
    
    let sum2 = 0;
    
    while (sum !== sum2) {
        n += 1;
        sum2 = n.toString(2).split('').filter(x => x === '1').length;
        if (sum === sum2) {
            answer = n;
            break;
        }
    }
    
    return answer;
}