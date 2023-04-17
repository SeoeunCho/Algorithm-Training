function solution(s, skip, index) {
    let answer = '';
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('').filter(x => !skip.includes(x));
    
//     let idxArr = s.split('').map(x => alphabet.indexOf(x) + index);
    
//     for (let i = 0; i < idxArr.length; i++) {        
//         if (alphabet.length > idxArr[i]) answer += alphabet[idxArr[i]];
//         else answer += alphabet[idxArr[i] % alphabet.length];
//     }
    
    for (const str of s) {
        let idx = alphabet.indexOf(str) + index;
        answer += alphabet[idx % alphabet.length];
    }
    
    return answer;
}