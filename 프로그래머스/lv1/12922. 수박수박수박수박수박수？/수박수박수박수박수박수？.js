function solution(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += i % 2 === 0 ? '수' : '박';
    }
    return str;
}