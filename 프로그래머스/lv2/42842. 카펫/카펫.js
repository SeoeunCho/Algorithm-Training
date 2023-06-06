function solution(brown, yellow) {
    let answer = [];
    
    for (let x = yellow; x > 0; x--) {
        let y = 0;
        if (yellow % x === 0) {
            y = yellow / x;
            if (x < y) break;
            
            let border = (x * 2) + (y * 2) + 4;
            if (border === brown) {
                answer = [x + 2, y + 2];
                break;
            }
        }
    }
    
    return answer;
}

// 24 x 1
// 12 x 2
// 8 x 3
// 6 x 4
