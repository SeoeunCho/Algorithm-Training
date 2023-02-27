function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    sum = arr.reduce((pre, cur) => pre + cur);
    answer = sum / arr.length;
    
    return answer;
}