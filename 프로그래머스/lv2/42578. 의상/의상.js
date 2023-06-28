function solution(clothes) {
    let answer = 1;
    
    let closet = {}; // 저장할 공간
    for (let [name, kind] of clothes) { // 종류로 옷 분류
        closet[kind] ? closet[kind].push(name) : closet[kind] = [name]; 
    }
    
    clothes = Object.values(closet);
    if (clothes.length === 1) return clothes[0].length;
    
    for (let i = 0; i < clothes.length; i++) {
        let sum = clothes[i].length;
        answer *= sum + 1;
    }
    
    return answer - 1;
}