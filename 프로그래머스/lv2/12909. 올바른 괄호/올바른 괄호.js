function solution(s){
    if (s.charAt(0) === ')' || s.charAt(s.length - 1) === '(') return false;
    
    // 연속되는 여는 괄호의 수를 세서 닫는 괄호의 개수가 더 많을 시 false를 반환
    let cntOpen = 0;
    for(let i = 0; i < s.length; i++) {
        s[i] === '(' ? cntOpen++ : cntOpen--;
        if (cntOpen < 0) return false;
    }
     
    return cntOpen ? false : true;
}