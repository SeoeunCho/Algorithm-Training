function solution(answers) {
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let result = [0, 0, 0];
    
    let len = answers.length;
    for (let i = 0; i < len; i++) {
        if (one[i % 5] === answers[i]) result[0]++;
        if (two[i % 8] === answers[i]) result[1]++;
        if (three[i % 10] === answers[i]) result[2]++;
    }
    
    let maxValue = Math.max(...result);
    let answer = [];
    for (let j = 0; j < result.length; j++) {
        if (result[j] === maxValue) answer.push(j + 1);
    }
    
    return answer;
}


// function solution(answers) {
//   const one = [1, 2, 3, 4, 5]; //수포자1
//   const two = [2, 1, 2, 3, 2, 4, 2, 5]; //수포자2
//   const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //수포자3
    
//   const result = [0, 0, 0];
    
//   const length = answers.length;
//   for (let i = 0; i < length; i++) {
//     if (one[i % 5] === answers[i]) result[0]++;
//     if (two[i % 8] === answers[i]) result[1]++;
//     if (three[i % 10] === answers[i]) result[2]++;
//   }
    
//   const maxValue = Math.max(...result); //가장 높은 점수 찾기
//   let answer = [];
//   for (let j = 0; j < result.length; j++) {
//     if (result[j] === maxValue) {
//       answer.push(j + 1);
//     };
//   };
//   return answer;
// }