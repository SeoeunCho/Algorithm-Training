let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

let [x1, y1] = input[0];
let [x2, y2] = input[1];
let [x3, y3] = input[2];
let ccw = (x1 * y2 + x2 * y3 + x3 * y1) - (x2 * y1 + x3 * y2 + x1 * y3);

// ccw > 0 반시계 방향, ccw = 0 일직선, ccw < 0 시계방향
if (ccw > 0) {
    console.log(1);
} else if (ccw === 0) {
    console.log(0);
} else {
    console.log(-1);
}