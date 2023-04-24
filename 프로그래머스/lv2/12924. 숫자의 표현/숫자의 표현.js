function solution(n) {
    let answer = 0;  
    
    const sum = (arr2) => {
        return arr2.reduce((acc, cur) => acc + cur, 0);
    }
      
    for (let i = n; i >= 1; i--) {
        let arr = [];
        
        for (let j = i; j >= 1; j--) {
            arr.push(j);
            let sumValue = sum(arr);

            if (sumValue >= n) {
                if (sumValue === n) answer++;
                break;
            }
        }
    }
    
    return answer;
}