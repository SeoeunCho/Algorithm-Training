function solution(my_string) {
    return my_string.split('').filter(el => el >= 0).sort().map(el => Number(el));
}