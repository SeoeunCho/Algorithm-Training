function solution(age) {
    let answer = '';
    
    const operator = {
        0 : 'a',
        1 : 'b',
        2 : 'c',
        3 : 'd',
        4 : 'e',
        5 : 'f',
        6 : 'g',
        7 : 'h',
        8 : 'i',
        9 : 'j'
    };
    
    age = age.toString().split('');
    
    for (let i = 0; i < age.length; i++) {
        answer += operator[age[i]];
    }
    
    return answer;
}