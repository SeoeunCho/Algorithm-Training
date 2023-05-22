// H-index는 h개의 논문이 각각 '적어도 h개의 인용'을 갖도록 하는 가장 큰 숫자 h 입니다.

function solution(citations) {
    let len = citations.length;
    let result = 0;
    
    for (let i = 1; i <= len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            if (citations[j] >= i) sum++;
        }
        // console.log(i, sum);
        
        if (sum >= i) result = i;
    }
    
    return result;
}