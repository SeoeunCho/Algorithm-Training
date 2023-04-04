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
    
    return answer + '0' + reverse;
}


// repeat, spread operator를 이용한 축약
function solution(food) {
    let answer = '';
    
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2));
    }
    
    return answer + '0' + [...answer].reverse().join('');
}