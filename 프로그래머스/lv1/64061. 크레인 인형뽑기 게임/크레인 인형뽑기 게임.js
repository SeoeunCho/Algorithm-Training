function solution(board, moves) {
    let result = 0;
    
    // 1. 배열 크기만큼 인형을 담아줄 다중배열 생성
    let newBoard = [];
    for (let i = 0; i < board.length; i++) newBoard[i] = new Array();
    
    let idx = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // newBoard의 배열에 이미 인형이 담겨져 있는 경우, 담을 인형의 idx를 변경시켜줌
            newBoard[j].length === 0 ? idx = 0 : idx = newBoard[j].length;
            // 2. newBoard의 배열순서에 맞춰 인형 담기
            if (board[i][j] !== 0) newBoard[j][idx] = board[i][j];
        }
    }
    
    let basket = [];
    for (let i = 0; i < moves.length; i++) {
        let num = moves[i] - 1; // 크레인의 위치
        let down = newBoard[num]; // 크레인 내려서 인형 뽑을 준비
        
        // 인형 뽑기
        let moveItem = down.shift();
        
        // *주의!* 뽑을 인형이 없으면 장바구니에 담지 않아야 함!
        if (!moveItem) continue;
        
        // 장바구니에 뽑은 인형 담을 때마다 중복체크
        if (basket[basket.length - 1] !== moveItem) basket.push(moveItem); // 중복x : 담기
        else { // 중복 : 기존 인형 제거, 사라진 인형(제거한 인형 + 중복된 인형의 수) = 2를 증가시켜 반환
            basket.pop();
            result += 2;
        }       
    }
    
    return result;
}