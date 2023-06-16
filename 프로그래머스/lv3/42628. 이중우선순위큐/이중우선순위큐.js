function solution(operations) {
    let answer = [0, 0];
    let arr = [];
    
    for (let i = 0; i < operations.length; i++) {
        let num = Number(operations[i].split(' ')[1]);
        if (operations[i][0] === 'I') {
            arr.push(num);
            arr.sort((a, b) => a - b);
        } else {
            if (num === -1 && arr.length !== 0) {
                let findMinNum = Math.min(...arr);
                arr.shift();
            } else if (num === 1 && arr.length !== 0) {
                // arr의 최댓값 삭제
                let findMaxNum = Math.max(...arr);
                arr.pop();
            }
        }
        answer = [Math.max(...arr), Math.min(...arr)];
    }
    
    return arr.length === 0 ? [0, 0] : answer;
}