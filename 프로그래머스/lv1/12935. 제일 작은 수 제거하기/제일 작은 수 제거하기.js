function solution(arr) {
    var answer = [];
    
    let minNumIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minNumIdx, 1);
    
    return arr.length > 0 ? arr : [-1];
}













// function solution(arr) {
//     if (arr.length > 1) {
//         arr.splice(arr.indexOf(Math.min(...arr)), 1);
//     } else {
//         return [-1];
//     }
//     return arr;
// }