// 나의 첫 풀이
function solution(new_id) {
    // 알파벳, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    let reg1 = /[^A-Za-z0-9-_\.]/g;
    new_id = new_id.replace(reg1, '');
    
    // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    let reg2 = /\.{2,}/g;
    new_id = new_id.replace(reg2, '.');
    
    new_id = new_id.split('');
    for (let i = 0; i < new_id.length; i++) {
        // 알파벳 대문자를 소문자로 치환
        if (new_id[i].match(new RegExp(/^[A-Z]/))) new_id[i] = new_id[i].toLowerCase();
    }
    
    // 마침표(.)가 처음에 위치한다면 제거
    if (new_id[0] === '.') new_id.shift();
    
    // 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    if (new_id.length > 15) new_id = new_id.slice(0, 15);
    
    // 마침표(.)가 끝에 위치한다면 제거
    if (new_id[new_id.length - 1] === '.') new_id.pop();
    
    // 결과가 빈 문자열이라면, "a"를 대입
    if (new_id.length === 0) return 'aaa';
    
    // 길이가 2자 이하라면, 길이가 3이 될 때까지 마지막 문자를 반복해서 끝에 붙임
    return new_id.length > 3 ? new_id.join('') : new_id.join('').padEnd(3, new_id.pop());
}




// 다른 풀이 참고!
function solution(new_id) {
    let answer = new_id
    
    .toLowerCase() //1단계
    .replace(/[^\w-.]/g, '') // 2단계 - '\w' 는 밑줄 문자를 포함한 영숫자 문자에 대응 = [A-Za-z0-9_]
    .replace(/\.+/g, '.') // 3단계 - '+'' 최소 한개 or 여러개
    .replace(/^\.|\.$/g, '') // 4단계 - '^' / '$' 특정 문자열로 시작/끝
    .replace(/^$/, 'a') // 5단계 - '^$'는 빈문자열을 의미
    .slice(0, 15).replace(/\.$/, '') // 6단계
    
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
    // charAt 대신 substring, slice 도 가능
}




// 메서드 체이닝을 이용한 내 코드 리펙토링
function solution(new_id) {
    let answer = new_id
    
    // 알파벳 대문자를 소문자로 치환
    .toLowerCase()
    
    // 알파벳, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    .replace(/[^a-z0-9-_\.]/g, '')
    
    // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환 (결론적으로 마침표(.)는 1개만 남아야 함)
    .replace(/\.+/g, '.')
    
    // 마침표(.)가 처음이나 끝에 위치한다면 제거
    .replace(/^\.|\.$/g, '')
    
    // 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    // 마침표(.)가 끝에 위치한다면 제거
    .slice(0, 15).replace(/\.$/, '')
    
    // 결과가 빈 문자열이라면, "a"를 대입
    .replace(/^$/, 'a')
    
    // 길이가 2자 이하라면, 길이가 3이 될 때까지 마지막 문자를 반복해서 끝에 붙임
    const len = answer.length;
    
    return len > 2 ? answer : answer.padEnd(3, answer.charAt(len - 1));
}




/* 정규표현식 참고 링크
https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

https://melonicedlatte.com/2022/12/30/194600.html

https://hitomis.tistory.com/68 */

/* 메서드 체이닝 참고링크
https://swieeft.github.io/2020/03/01/MethodChaining.html */