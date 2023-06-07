function solution(progresses, speeds) {
    let answer = [];
    
    // 1. 각 며칠이 걸리는지 찾기
    const finishDays = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));
    
    
    // 2. 이전 기능보다 다음 기능이 크면 이전번호+1을 뿌리기, 작으면 기다리고 현재번호+1뿌리기
    let count = 1;
    let len = finishDays.length;
    let prevDay = finishDays[0];
    
    for (let i = 1; i < finishDays.length; i++) {
        if (prevDay >= finishDays[i]) {
            count++;
            console.log('1===', count);
        } else {
            answer.push(count);
            count = 1;
            prevDay = finishDays[i];
            console.log('2===', count);
        }
    }
    
    // 마지막으로 처리되지 않은 남은 기능들 푸시
    answer.push(count);

    return answer;
}