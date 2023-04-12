// 정규식 표현을 이용한 풀이
function solution(s) {
    let answer = '';
    let arr = [];
    
    // 문자열 분리 및 연속되는 공백 제거
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        // 공백이 아닌 단어만 찾아 JadenCase로 변환
        if (s[i] !== '') {
            
            // 첫 문자가 대문자가 아닌 것만 찾아 대문자로 변환
            let firstStr = s[i][0]; // s[i][0].toUpperCase(); 만으로도 대체 가능
            if (firstStr.match(new RegExp(/^[a-z]/))) {
                firstStr = firstStr.toUpperCase();
            }
            
            let word = firstStr;
            // 첫 문자 외의 알파벳이 소문자가 아닌 것만 찾아 소문자로 변환
            for (let j = 1; j < s[i].length; j++) {
                let otherStr = s[i][j];
                if (otherStr.match(new RegExp(/^[A-Z]/))) {
                    otherStr = otherStr.toLowerCase();
                }
                word += otherStr;
            }
            
            // 변환된 단어를 원래 문자열에 대입
            s[i] = word;
        }
    }
    
    return answer = s.join(' ');
}

/* 대소문자를 구분하는 방식
참고링크 : https://developer-talk.tistory.com/789 */







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