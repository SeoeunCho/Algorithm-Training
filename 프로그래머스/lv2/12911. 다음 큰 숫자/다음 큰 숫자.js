function solution(n) {
    let answer = 0;
    
    // 1의 개수 찾는 함수
    const sumFun = numb => numb.toString(2).split('').filter(x => x === '1').length;
    
    let sum = sumFun(n);
    let sum2 = 0;
    
    while (sum !== sum2) {
        n += 1;
        sum2 = sumFun(n);
        
        if (sum === sum2) {
            answer = n;
            break;
        }
    }
    
    return answer;
}