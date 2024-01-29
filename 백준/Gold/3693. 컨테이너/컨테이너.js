let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let testCases = input.map(Number);

for (let i = 1; i <= n; i++) {
  // 컨테이너 박스가 쌓인 총 개수
  let stack = Math.ceil(testCases[i] / 5);

  let length; // 길이
  let width; // 너비

  let l;
  let w;

  let prevValue = Number.MAX_VALUE;

  for (let j = 1; j <= Math.sqrt(stack); j++) {
    length = 40 * j + 4 * (j + 1);
    width = 8 * Math.ceil(stack / j) + 2 * (Math.ceil(stack / j) + 1);

    if (prevValue > length * width) {
      prevValue = length * width;

      l = length;
      w = width;
      //console.log("1==>", j, length, width, "===", prevValue);
    } else if (prevValue === length * width) {
      //console.log("2==>", prevValue, j, "X", stack / j);
      if (l - w > length - width) {
        //console.log("3==>", prevValue, j, "X", stack / j);
        l = length;
        w = width;
        prevValue = length * width;
      }
    } else {
      // break;
    }
  }

  if (l >= w) {
    console.log(`${l} X ${w} = ${prevValue}`);
  } else {
    console.log(`${w} X ${l} = ${prevValue}`);
  }
}
