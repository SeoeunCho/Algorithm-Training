// function solution(A,B){
//     let answer = 0;
    
//     while (A.length > 0) {
//         let a = Math.min(...A);
//         A.splice(A.indexOf(a), 1);

//         let b = Math.max(...B);
//         B.splice(B.indexOf(b), 1);
        
//         answer += a * b;
//     }
    
//     return answer;
// }


function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((sum, curr, i) => sum + curr * B[i], 0);
}