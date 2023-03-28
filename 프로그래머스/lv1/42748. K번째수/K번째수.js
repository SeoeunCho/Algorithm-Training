function solution(array, commands) {
    let answer = [];
    let arr = [];
    
    for (let i = 0; i < commands.length; i++) {
        arr.push(array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b));
        let num = commands[i][2];
        answer.push(arr[i][num - 1]);
    }
    
    return answer;
}









// function solution(array, commands) {
//     var answer = [];
    
//     for(let i=0; i < commands.length; i++){
//         let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => {
// 		return a-b
//         });
        
//         answer.push(list[commands[i][2]-1]);
//     }

//     return answer;
// }