function solution(numbers, direction) {
    const maxIndex = numbers.length - 1;
    
    return direction === 'right' ? 
        [numbers[maxIndex], ...numbers.slice(0, maxIndex)] : [...numbers.slice(1), numbers[0]];
}
