let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 각 좌표값을 숫자로 변환
let points = input.map(el => el.split(' ').map(Number));

let [x1, y1] = points[0];
let [x2, y2] = points[1];
let [x3, y3] = points[2];

// Counter Clockwise 알고리즘
let ccw = (x1 * y2 + x2 * y3 + x3 * y1) - (x2 * y1 + x3 * y2 + x1 * y3);

if (ccw > 0) {
    console.log(1);
} else if (ccw === 0) {
    console.log(0);
} else {
    console.log(-1);
}