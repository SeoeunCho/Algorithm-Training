function solution(s) {
    let answer = [0, 0];
    
    while (s > 1) {
        // 0의 개수
        answer[1] += s.split('').filter(x => x === '0').length;
        
        // 0을 빼고 1만 남은 배열의 길이를 이진 변환한 결과
        s = s.split('').filter(x => x !== '0').length.toString(2);
        
        // 변환 횟수
        answer[0]++;
        
        console.log(s, answer[1], answer[0]);
    }
    
    return answer;
}