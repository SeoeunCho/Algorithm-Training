function solution(number, limit, power) {
    let answer = 0;
    let arr = [];
    
    for (let i = 1; i <= number; i++) {
        let sum = 0;
        for (let j = 1; j <= i / 2; j++) { 
            if (i % j === 0) sum++;
        }
        arr.push(sum + 1);
    }
    console.log(arr);
    
    let map =  arr.map(x => {
        return x > limit ? power : x;
    });
    
    return map.reduce((acc, cur) => acc + cur, 0);
}