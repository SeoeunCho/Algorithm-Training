function solution(numbers, direction) {
    /* 초기풀이
    const maxIndex = numbers.length - 1;
    
    return direction === 'right' ? 
        [numbers[maxIndex], ...numbers.slice(0, maxIndex)] : [...numbers.slice(1), numbers[0]];
    */
    
    if (direction === 'right') {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    
    return numbers;
}
