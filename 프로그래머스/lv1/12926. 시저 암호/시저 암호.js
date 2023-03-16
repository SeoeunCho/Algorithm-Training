function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = '';
    
    var text = '';
    for (let i = 0; i < s.length; i++) {
        let text = s[i];
        if (text === ' ') {
            answer += ' ';
            continue;
        }
        
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if (index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}