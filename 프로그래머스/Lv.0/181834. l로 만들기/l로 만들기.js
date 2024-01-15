function solution(myString) {
    let regex = /[a-k]/g;
    
    return myString.replace(regex, 'l');
}