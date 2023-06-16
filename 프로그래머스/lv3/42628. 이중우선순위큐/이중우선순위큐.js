function solution(operations) {
    let answer = [0, 0];
    let queueArr = [];
    
    for (let i = 0; i < operations.length; i++) {
        let num = Number(operations[i].split(' ')[1]);
        if (operations[i][0] === 'I') {
            queueArr.push(num);
            queueArr.sort((a, b) => a - b);
        } else {
            if (num === -1 && queueArr.length !== 0) {
                let findMinNum = Math.min(...queueArr);
                queueArr.shift();
            } else if (num === 1 && queueArr.length !== 0) {
                let findMaxNum = Math.max(...queueArr);
                queueArr.pop();
            }
        }
        answer = [Math.max(...queueArr), Math.min(...queueArr)];
    }
    
    return queueArr.length === 0 ? [0, 0] : answer;
}