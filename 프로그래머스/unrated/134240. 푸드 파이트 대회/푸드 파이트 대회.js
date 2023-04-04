function solution(food) {
    let answer = '';
    let reverse = '';
    
    for (let i = 1; i < food.length; i++) {
        let num = Math.floor(food[i] / 2);
        if (num > 0) {
            for (let j = 1; j <= num; j++) {
                answer += i;
            }            
        }
    }
    reverse = answer.split('').reverse().join('');
    answer += 0;
    
    return answer + reverse;
}