function solution(phone_number) {
    let lastNum = phone_number.slice(-4);
    return lastNum.padStart(phone_number.length, '*');
}