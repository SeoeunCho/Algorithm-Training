function solution(n, lost, reserve) {   
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a, b) => a - b);
    
    lostArr = lost.filter(x => !reserve.includes(x));
    reserveArr = reserve.filter(x => !lost.includes(x));
    console.log(lostArr, reserveArr)
    
    for (let i = 0; i < reserveArr.length; i++) {
        for (let j = 0; j < lostArr.length; j++) {
            if (reserveArr[i] - 1 === lostArr[j] || reserveArr[i] + 1 === lostArr[j]) {
                lostArr.shift();
                break;
            }
        }
    }
    
    return n - lostArr.length;
}