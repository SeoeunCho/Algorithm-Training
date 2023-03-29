function solution(t, p) {
    let answer = 0;
    let arr = [];
    let result = [];
    
    t = t.split('');
    
    for (let i = 0; i < t.length; i++) {
        arr.push(t.slice(i, i + p.length).join(''));
    }
    
    arr.forEach(x => {
        if (x.length === p.length && x <= p) result.push(x);
    }); 
    
    return result.length;
}