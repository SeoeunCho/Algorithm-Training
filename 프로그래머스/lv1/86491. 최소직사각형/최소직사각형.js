function solution(sizes) {
    // 가로세로 값을 비교하여 큰 값을 가로사이즈에 배치
    let arr = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);
    
    let width = [];
    let height = [];
    
    for (let i = 0; i < arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }
    
    return Math.max(...width) * Math.max(...height);
}