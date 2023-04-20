function solution(s) {
    let zeroSum = 0;
    let changeSum = 0;
    
    while (s > 1) {
        // 0의 개수
        zeroSum += s.split('').filter(x => x === '0').length;
        
        // 0을 빼고 1만 남은 배열의 길이를 이진 변환한 결과
        s = s.split('').filter(x => x !== '0').length.toString(2);
        
        // 변환 횟수
        changeSum++;
        
        console.log(s, zeroSum, changeSum);
    }
    
    return [changeSum, zeroSum];
}