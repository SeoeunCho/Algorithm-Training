function solution(s){
    let sum1 = 0;
    let sum2 = 0;
    s.toLowerCase().split('').map(x => {
        if (x === 'p') sum1 += 1;
        else if (x === 'y') sum2 += 1;
    })
    console.log(sum1, sum2)
    return sum1 === sum2 ? true : false;
}

// 정규식을 활용한 문제풀이
// function solution(s){
//     var answer = true;
//     const countP = s.match(/[p]/gi) == null ? 0 : s.match(/[p]/gi).length;
//     const countY = s.match(/[y]/gi) == null ? 0 : s.match(/[y]/gi).length;
    
//     answer = countP === countY ? true : false;    

//     return answer;
// }