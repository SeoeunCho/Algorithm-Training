function solution(N, stages) {
    let arr = [];
    let len = stages.length;
    
    for (let i = 1; i <= N ; i++) {
        // 현재 단계에서 실패한 유저수를 계산
        let sum = stages.filter(x => x === i).length;
        
        // 현재까지의 누적 도전자수를 나누어 실패율 계산
        // 현재까지의 누적 도전자수에 실패한 유저수 빼기
        let failRate = 0;
        if (sum === 0) failRate = 0;
        else failRate = sum / len;
        len -= sum;
        
        arr.push({idx: i, rate: failRate});
    }
    
    // 실패율을 내림차순으로 정렬
    arr.sort((a, b) => {
      if (a.rate > b.rate) return -1;
      else if (a.rate < b.rate) return 1;
    })
    
    return arr.map(el => el.idx);
}


// 다른 풀이
function solution(N, stages) {
    let arr = [];
    
    for (let i = 1; i <= N; i++) {
        // 현재 스테이지를 클리어하지 못한 사용자 수
        let failedUser = stages.filter(x => x === i).length;
        // 현재 스테이지에 도달한 사용자 수
        let challenger = stages.filter(x => x >= i).length;
        
        arr.push([i, failedUser/challenger]);
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    
    return arr.map(x => x[0]);
}