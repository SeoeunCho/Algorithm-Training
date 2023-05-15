function solution(board, moves) {
    let answer = 0;
    
    const stack = [];
    board.forEach((x, i) => {
        stack[i] = new Array();
    })
    let num = 0;
    for (let i = 0; i < board.length; i++) {
        let list = board[i];
        for (let j = 0; j < board.length; j++) {
            num = stack[j].length === 0 ? 0 : stack[j].length;
            if (list[j] !== 0) stack[j][num] = list[j];
        }
    }
    // console.log('stack', stack);
    
    let arr = [];
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i] - 1;
        let a = stack[move];
        let item = a.shift();
        
        if (!item) continue;
        if (arr[arr.length - 1] !== item) arr.push(item);
        else {
            arr.pop();
            answer += 2;
        };
    }
    // console.log('arr', arr);
    
    return answer;
}