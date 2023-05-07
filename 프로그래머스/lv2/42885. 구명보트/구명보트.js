function solution(people, limit) {
    let count = 0;
    
    people.sort((a, b) => b - a);
    let len = people.length;
    
    for (let i = 0; i < len; i++) {
        if (people[i] + people[len - 1] <= limit) {
            len--;
        }
        count++;
    }
    
    return count;
}



// 정확성 O / 효율성 X 오답
/*function solution (people, limit) {
    let answer = 0;
    
    while (people.length !== 0) {
        answer++;
        let max = people[0];
        let min = people[people.length - 1];
    
        if (max + min <= limit) {
            people.shift();
            people.pop();
            continue;
        }
        people.shift();
    }
    
    return answer;
}*/