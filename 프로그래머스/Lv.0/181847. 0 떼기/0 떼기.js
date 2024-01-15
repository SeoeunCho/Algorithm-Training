function solution(n_str) {
    /* 초기 풀이
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] !== '0') {
            return n_str.slice(i);
        }
    }
    */
    
    return n_str.replace(/^0+/, '');
}