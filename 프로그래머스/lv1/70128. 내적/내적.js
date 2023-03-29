function solution(a, b) {
    var answer = 0;
    
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    
    return answer;
}

// for...in 문을 이용한 풀이
// function solution(a, b) {
//     let result = 0;
//     for (let i in a) result += a[i] * b[i];
//     return result;
// }