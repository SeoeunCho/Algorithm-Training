function solution(s) {
    const answer = [];
    const arr = [];
    
    // 1. 원소 배열에 담아줌
    s.slice(2, s.length-2).split('},{').forEach(el => {
        arr.push(el.split(',').map(v => Number(v)))
    })
    
    // 2. 집합 길이별로 오름차순 정렬
    arr.sort((a, b) => a.length - b.length);
    
    // 3. 길이가 1일 경우는 원소 반환
    if (arr.length === 1) return arr[0];
    
    // 3. 길이가 1이상일 경우 튜플구하기
    let firstEle = arr[0][0];
    answer.push(firstEle);
    
    for (let i = 1; i < arr.length; i++) {
        // answer에 있는 원소와 다르면 answer에 push
        for (let j = 0; j < arr[i].length; j++) {
            if (!answer.includes(arr[i][j])) answer.push(arr[i][j]);
        }
    }
    
    return answer;
}