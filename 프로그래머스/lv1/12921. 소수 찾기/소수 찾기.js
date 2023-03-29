// 에라토스테네스의 체
function solution(n) {
    let answer = 0;
    let arr = [];
    
    // 배열에는 2부터 n까지 채운다. 이때, 배열의 0번, 1번 인덱스는 undefined로 배열에 채워진다.
    for (let i = 2; i <= n; i++) arr[i] = i;
    
    
    for (let j = 2; j <= n; j++) {
        if (arr[j] === 0) continue; // 만약 값이 0이라면 이미 지웠다는 것이므로 continue를 실행한다.
        // 배열을 순회하며 해당 값의 배수에 해당하는 모든 수를 0으로 표시해서 지웠다는 표시를 한다.
        for (let k = j + j; k <= n; k += j) {
            arr[k] = 0;
        }
    }
    
    // falsy 값(undefined, null, 0 등)이 아닌 값을 버리고 해당 배열의 길이를 반환한다.
    return arr.filter((el) => el).length;
}