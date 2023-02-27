// 기본 풀이
function solution(num) {
    if (num % 2 === 0) return 'Even';
    else return 'Odd';
}


// 삼항연산자 풀이
function solution(num) {
    return (num % 2 === 0 ? 'Even' : 'Odd');
}