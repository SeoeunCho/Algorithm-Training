function solution(n) {
    let answer = 0;
    
    answer = n.toString().split('').map(x => Number(x));
    answer = answer.reduce((pre, cur) => pre + cur);
    
    return answer;
}