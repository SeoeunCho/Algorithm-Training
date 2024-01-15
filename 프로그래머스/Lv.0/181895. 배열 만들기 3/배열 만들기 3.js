function solution(arr, intervals) {
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < intervals.length; i++) {
        const [a, b] = intervals[i];
        
        if (i === 0) {
            arr1 = arr.slice(a, b + 1);
        } else {
            arr2 = arr.slice(a, b + 1);
        }
    }
    
    return arr1.concat(arr2);
}