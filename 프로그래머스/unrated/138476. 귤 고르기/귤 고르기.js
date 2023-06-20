function solution(k, tangerine) {
    let answer = 0;
    
    // 1. 귤객체 초기화
    const tObj = {};
    tangerine.forEach(t => tObj[t] = (tObj[t] || 0) + 1);
    
    // 2. 값만 도출하여 내림차순 정렬
    const tArr = Object.values(tObj).sort((a, b) => b - a);
    
    // 3. 필요한 귤만큼 가짓수 더해줌
    let count = 0;
    for (let i = 0; i < tArr.length; i++) {
        if (count < k) {
            count += tArr[i];
            answer++;
        } else {
            return answer;
        };
    }
    
    return answer;
}