function solution(n, words) {
    let answer = [0, 0];
    let stack = [];
    
    for (let i = 0; i < words.length; i++) {
        // 중복체크
        if (!stack.includes(words[i])) stack.push(words[i]);
        else {
            answer[0] = (i + 1) % n !== 0 ? (i + 1) % n : n;
            answer[1] = Math.ceil((i + 1) / n);
            break;
        }
        
        // 끝말잇기 탈락체크
        let priorWord = words[i];
        let len = words[i].length;
        let nextWord = words[i + 1];
        
        if (nextWord) {
            let lastAlpha = priorWord.substring(len - 1, len);
            let firstAlpha = nextWord.substring(0, 1);
            
            if (lastAlpha !== firstAlpha) {
                // console.log(i, priorWord, lastAlpha, nextWord, firstAlpha);
                // 틀린 사람의 번호 찾기
                answer[0] = (i + 2) % n !== 0 ? (i + 2) % n : n;
                // 틀린 차례 찾기
                answer[1] = Math.ceil((i + 2) / n);
                break;
            }
        }
    }
    
    return answer;
}