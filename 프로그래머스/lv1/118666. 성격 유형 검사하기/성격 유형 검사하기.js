function solution(survey, choices) {
    var answer = '';
//     survey	choices	result
// ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
    
//     n1 c1 m2 t3 a1
    let stack = [];
    let arr = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] === 1) stack.push(survey[i][0] + 3);
        if (choices[i] === 7) stack.push(survey[i][1] + 3);
        
        if (choices[i] === 2) stack.push(survey[i][0] + 2);
        if (choices[i] === 6) stack.push(survey[i][1] + 2);
        
        if (choices[i] === 3) stack.push(survey[i][0] + 1);
        if (choices[i] === 5) stack.push(survey[i][1] + 1);
    }
    console.log(stack)
    
    for (let j = 0; j < stack.length; j++) {
        if (stack[j][0] === 'R') arr[0] += Number(stack[j][1]);
        if (stack[j][0] === 'T') arr[1] += Number(stack[j][1]);
        
        if (stack[j][0] === 'C') arr[2] += Number(stack[j][1]);
        if (stack[j][0] === 'F') arr[3] += Number(stack[j][1]);
        
        if (stack[j][0] === 'J') arr[4] += Number(stack[j][1]);
        if (stack[j][0] === 'M') arr[5] += Number(stack[j][1]);
        
        if (stack[j][0] === 'A') arr[6] += Number(stack[j][1]);
        if (stack[j][0] === 'N') arr[7] += Number(stack[j][1]);
    }
    console.log('arr', arr)
    
    answer += arr[0] >= arr[1] ? 'R' : 'T';
    answer += arr[2] >= arr[3] ? 'C' : 'F';
    answer += arr[4] >= arr[5] ? 'J' : 'M';
    answer += arr[6] >= arr[7] ? 'A' : 'N';
    
    console.log('answer', answer)
    return answer;
}