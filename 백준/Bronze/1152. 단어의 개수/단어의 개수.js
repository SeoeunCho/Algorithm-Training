// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].trim().split(' ');

if (data == "") {
    console.log(0);
} else {
    console.log(data.length);
}