const solution = (want, number, discount) => {
    let answer = 0;
    
    // 1. 살 제품의 총수량 구하기 = number의 원소 다 더한 값
    const count = number.reduce((acc, cur) => acc + cur, 0);
    
    for (let i = 0; i < discount.length; i++) {
        // 2. 총수량만큼 할인제품배열을 재배열
        const disArr = discount.slice(i, count + i);
        
        if (disArr.length === count) {
            let disSumArr = [];
            // 3. 원하는제품의 각 수량과 할인제품의 각 수량 비교
            for (let j = 0; j < want.length; j++) {
                disSumArr[j] = disArr.filter(item => item === want[j]).length;
            }
            // 4. 할인제품의 각수량이 원하는제품의 각 수량과 같거나 크면 성립
            if (disSumArr.every((el, i) => el >= number[i])) answer++;
        }
    }
    
    return answer;
}