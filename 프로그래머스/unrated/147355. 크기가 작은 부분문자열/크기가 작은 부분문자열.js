function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i < t.length; i++) {
        let arr = t.slice(i, i + p.length);
        
        // 문자열 앞에 +를 붙이면 숫자로 변환 된다.
        if (arr.length === p.length && +arr <= +p) answer++;
    }
    
    return answer;
}