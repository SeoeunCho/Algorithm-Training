function solution(nums) {
    let kind = 0;
    let arr = [];
    
    // 가질 수 있는 포켓몬수
    let count = nums.length / 2;
    
    // 포켓몬 종류
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
            kind++;
        }
    }
    return count < kind ? count : kind;
}