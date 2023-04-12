







// 첫 알파벳 및 이외의 알파벳이 대소문자인지 아닌지 구별없이 푼 풀이
function solution(s) {
    let answer = '';
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '') {
            let firstStr = s[i][0].toUpperCase(); // 첫번째 스트링 구하기
            let result = firstStr;
            for (let j = 1; j < s[i].length; j++) {
                result += s[i][j].toLowerCase();
            }
            s[i] = result;
        }
    }
    return answer = s.join(' ');
}