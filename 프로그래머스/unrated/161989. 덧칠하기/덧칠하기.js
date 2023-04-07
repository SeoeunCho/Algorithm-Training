function solution(n, m, section) {
    let answer = 0;
    
    // 현재까지 칠한 구역
    let part = 0;
    
    section.forEach(el => {
        if (el > part) {
            // 칠해진 구역까지 업데이트 시켜줌
            part = el + m - 1;
            // 페인트가 칠해졌으니 증가시켜줌
            answer++;
        }
    })
    
    return answer;
}