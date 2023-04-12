function solution(s) {
    let answer = '';
    let arr = [];
    
    // 문자열 분리 및 연속되는 공백 제거
    // s = s.split(' ').filter(x => x !== '');
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '') {
            let firstStr = s[i][0].toUpperCase();
        
            let word = firstStr;
            for (let j = 1; j < s[i].length; j++) {
                let otherStr = s[i][j];
                if (otherStr.match(new RegExp(/^[A-Z]/))) {
                    otherStr = otherStr.toLowerCase();
                }
                word += otherStr;
            }
            // answer = arr.join(' ');
            s[i] = word;
            answer = s.join(' ');
        }
    }
    
    return answer;
}

// 대소문자를 구분하는 방식
// 참고링크 : https://developer-talk.tistory.com/789


// function solution(s) {
//     let answer = '';
//     s = s.split(' ');
    
//     for (let i = 0; i < s.length; i++) {
//         let arr = s[i].split(''); // 각 단어별로 split해서 배열에 담음
//         let firstStr = arr.shift().toUpperCase(); // 첫번쨰 스트링 구하기
        
//         arr.unshift(firstStr);
        
//         if (i < s.length - 1) arr.push(' ');
        
//         for (let j = 1; j < arr.length; j++) {
//             arr[j] = arr[j].toLowerCase();
//         }
        
//         answer += arr.join('');
//     }
    
//     return answer;
// }