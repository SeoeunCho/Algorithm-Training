function solution(name, yearning, photo) {
    let answer = [];
    
    for (let i = 0; i < photo.length; i++) {
        let value = 0;
        for (let j = 0; j < name.length; j++) {
            if (photo[i].includes(name[j])) value += yearning[j];
        }
        answer.push(value)
    }
    
    return answer;
}


// for...of 문을 이용한 풀이
function solution(name, yearning, photo) {
    let answer = [];
    for (let i of photo) {
        let value = 0;
        for (let j = 0; j < name.length; j++) {
            if (i.includes(name[j])) value += yearning[j];
        }
        answer.push(value);
    }
    
    return answer;
}