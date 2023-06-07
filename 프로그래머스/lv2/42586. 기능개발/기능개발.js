function solution(progresses, speeds) {
    let answer = [];
    
    // 1. 각 작업일 구하기
    const finishDays = progresses.map((el, i) => Math.ceil((100 - el) / speeds[i]));
    
    let count = 1;
    let len = finishDays.length;
    let prevDay = finishDays[0];
    
    for (let i = 1; i < finishDays.length; i++) {
        // 2. prevDay가 다음 작업일보다 크거나 같으면 count++, 아직 뿌리지 않음
        if (prevDay >= finishDays[i]) {
            count++;
        } else {
            answer.push(count);      // 3-1. prevDay가 다음 작업일보다 작아지면 구해진 count뿌리기
            count = 1;               // 3-2. count 초기화
            prevDay = finishDays[i]; // 3-3. prevDay에 다음 작업일 대입
        }
    }
    
    // 마지막으로 뿌려지지 않은 남은 기능들의 개수를 구한 count뿌리기
    answer.push(count);

    return answer;
}