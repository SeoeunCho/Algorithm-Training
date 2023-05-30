function solution(arr) {
    let answer = 1;
    
    let maxNum = Math.max(...arr);
    let num = maxNum;
    
    while (answer !== 0) {
        let value = arr.every(el => num % el === 0);
        
        if (value) {
            answer = num;
            break;
        }
        
        num += maxNum;
    }
    
    return answer;
}