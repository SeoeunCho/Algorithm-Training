function solution(board, moves) {
    let answer = 0;
    
    // 1. board의 길이만큼 인형을 담을 다중배열 생성(basket)
    const basket = [];
    board.forEach((x, i) => {
        basket[i] = new Array();
    })
    
    // 2. board의 아이템을 list에 담고 각 순서대로 basket에 인형을 담는다.
    let num = 0;
    for (let i = 0; i < board.length; i++) {
        let list = board[i];
        for (let j = 0; j < board.length; j++) {
            num = basket[j].length === 0 ? 0 : basket[j].length;
            if (list[j] !== 0) basket[j][num] = list[j];
        }
    }
    // console.log('basket', basket);
    
    let stack = [];
    for (let i = 0; i < moves.length; i++) {
        // 3. 인형을 담은 basket의 순서대로 moves의 인형번호와 같으면 stack에 담고 basket에서 제거
        let move = moves[i] - 1;
        let a = basket[move];
        let item = a.shift();
        
        // *주의* 더이상 인형이 없어진 경우는 건너뛰어야함!
        if (!item) continue;
        
        // 4. stack에 인형을 담을때마다 중복이 아니면 담아주고, 중복이면 제거하고 answer에 2씩 더하여 반환
        if (stack[stack.length - 1] !== item) stack.push(item);
        else {
            stack.pop();
            answer += 2;
        };
    }
    // console.log('arr', arr);
    
    return answer;
}