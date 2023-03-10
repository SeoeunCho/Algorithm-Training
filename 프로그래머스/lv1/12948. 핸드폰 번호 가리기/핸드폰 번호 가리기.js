function solution(phone_number) {
    lastNum = phone_number.toString().slice(-4);
    return lastNum.padStart(phone_number.length, '*');
}