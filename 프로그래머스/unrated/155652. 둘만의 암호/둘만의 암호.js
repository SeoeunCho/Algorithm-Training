function solution(s, skip, index) {
    let answer = '';
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('').filter(x => !skip.includes(x));
    console.log(alphabet, alphabet.length)
    
    let idxArr = [];
    idxArr = s.split('').map(x => alphabet.indexOf(x) + index);
    console.log(idxArr)
    
    for (let i = 0; i < idxArr.length; i++) {        
        if (alphabet.length > idxArr[i]) {
            answer += alphabet[idxArr[i]];
        } else {
            let num = idxArr[i] % alphabet.length;
            answer += alphabet[num];
        }
    }
    
    return answer;
}