function solution(n, m, section) {
    let answer = 0;
    
    // 현재까지 칠한 구역
    let part = 0;
    
    section.forEach(el => {
        if (el > part) {
            part = el + m - 1;
            answer ++;
        }
    })
    
    return answer;
}