function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }
    
//     let i = 0;
//     while (s !== '' && i < s.length) {
//         if (s[i] === s[i + 1]) {
//             s = s.replace(s[i] + s[i + 1], '');
//             i = 0;
//         } else {
//             i++;
//         }
//     }
    
    return stack.length === 0 ? 1 : 0;
}