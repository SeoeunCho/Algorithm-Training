function solution(arr1, arr2) {
    let arr1Len = arr1.length; // arr1 행 개수
    let len1 = arr1[0].length; // arr1 열 개수
    let len2 = arr2[0].length; // arr2 열 개수
    
    // 결과 배열 크기 = arr1Len * len2
    let answer = new Array(arr1Len);
    for (let i = 0; i < arr1Len; i++) {
        answer[i] = new Array(len2);
    }
    
    // arr1의 행마다 arr2의 열의 개수만큼 연산
    for (let i = 0; i < arr1Len; i++) {
        for (let j = 0; j < len2; j++) {
            let sum = 0;
            for (let k = 0; k < len1; k++) {
                // arr1의 i행에서 열의 인덱스 == arr2의 j열에서 행의 인덱스인 같은 원소끼리 곱하여 더해주기
                sum += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = sum;
        }
    }
    return answer;
}