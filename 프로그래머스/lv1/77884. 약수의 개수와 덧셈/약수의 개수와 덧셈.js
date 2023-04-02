function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        // 약수의 개수 구하기
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        
        count % 2 === 0 ? sum += i : sum -= i;
    }
    return sum;
}



// 제곱근을 이용한 풀이
function solution(left, right) {
    let answer = 0;

    for(let i = left; i <= right; i++) {
        // 특정수의 제곱근이 정수이면 약수의 개수는 홀수
        Math.sqrt(i) % 1 === 0 ? answer -= i : answer += i;
    }
    
    return answer;
}