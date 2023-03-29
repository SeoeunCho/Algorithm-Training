function solution(arr, divisor) {
    var answer = [];
    
    let list = arr.filter(el => el % divisor === 0);
    answer = list.length > 0 ? list.sort((a, b) => a - b) : [-1];
    
    return answer;
}