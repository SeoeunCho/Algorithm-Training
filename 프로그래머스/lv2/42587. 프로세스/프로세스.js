function solution(priorities, location) {
    let answer = 0;
    
    // 프로세스의 {중요도, 위치}를 담은 배열
    const queue = priorities.map((priority, location) => {
        return {priority, location};
    })
    
    while (queue.length) {
        // 1. 실행 대기 큐에서 첫번째 프로세스를 꺼낸다.
        let process = queue.shift();
        
        // 2. 대기 중인 프로세스 중 우선순위가 높은게 있다면 다시 큐에 넣는다.
        if (queue.some(el => el.priority > process.priority)) {
            queue.push(process);
        
        // 3. 없다면 해당프로세스의 실행 순서를 반환
        } else {
            answer++;
            if (process.location === location) break;
        }
    }
    
    return answer;
}