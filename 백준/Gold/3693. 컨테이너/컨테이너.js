let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCount = Number(input[0]);
let testCases = input.map(Number);

const CONTAINER_SIZE = {
  LENGTH: 40,          // 길이
  LENGTH_SPACE: 4,     // 길이 사이 공간
  WIDTH: 8,            // 너비
  WIDTH_SPACE: 2,      // 너비 사이 공간
};

for (let i = 1; i <= testCount; i++) {
  // 면적을 차지하는 컨테이너의 개수
  let stack = Math.ceil(testCases[i] / 5);

  let result = {
    length: 0,
    width: 0,
    size: Number.MAX_VALUE,
  };

  for (let j = 1; j <= Math.sqrt(stack); j++) {
    let length =
      CONTAINER_SIZE.LENGTH * j + CONTAINER_SIZE.LENGTH_SPACE * (j + 1);
      
    let width =
      CONTAINER_SIZE.WIDTH * Math.ceil(stack / j) +
      CONTAINER_SIZE.WIDTH_SPACE * (Math.ceil(stack / j) + 1);
      
    let size = length * width;

    /** 
    1. 이전 주차장 크기가 현재 주차장 크기보다 클 경우
    2. 이전 주차장 크기와 현재 주차장 크기가 같고, (길이 - 너비)도 더 작을 경우
    */ 
    if (
      result.size > size ||
      (result.size === size && result.length - result.width > length - width)
    ) {
      result = {
        length: length,
        width: width,
        size: size,
      };
    }
  }

  if (result.length >= result.width) {
    console.log(`${result.length} X ${result.width} = ${result.size}`);
  } else {
    console.log(`${result.width} X ${result.length} = ${result.size}`);
  }
}