// 수학식 풀이 = (의상의 개수 + 1) * (의상의 개수 + 1) - 1

function solution(clothes) {
    let answer = 1;
    
    const obj = {}; // 저장할 공간
    
    // 종류별로 옷 분류
    // for (let [name, kind] of clothes) {
    //     obj[kind] ? obj[kind].push(name) : obj[kind] = [name];
    // }
    
    for (let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }
    
    for (let key in obj) {
        answer *= (obj[key] + 1);
    }
    
    return answer - 1;
}