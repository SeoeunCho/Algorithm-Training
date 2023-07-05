function solution(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  // 다중집합 생성
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < str1.length - 1; i++) {
    if (/^[a-z]{2}$/g.test(str1[i] + str1[i + 1])) arr1.push(str1[i] + str1[i + 1])
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (/^[a-z]{2}$/g.test(str2[i] + str2[i + 1])) arr2.push(str2[i] + str2[i + 1])
  }

  const arr3 = [...arr2]
  // 교집합 개수 세기
  let counter = 0;
  arr1.forEach((e, i) => {
    for (let j = 0; j < arr2.length; j++) {
      if (e === arr2[j]) {
        arr2.splice(j, 1);
        counter++
        break;
      }
    }
  })
  const g = arr1.length + arr3.length - counter
  return g ? parseInt((counter / g) * 65536) : 65536
}

// function solution(str1, str2) {
//     let answer = 0;
//     str1 = test(str1);
//     str2 = test(str2);
    
//     let inter = 0;
//     let union = 0;
    
//     if (str1.length && str2.length) {
//         if (str1.length >= str2.length) {
//             inter = str2.filter(el => str1.includes(el)).length;
//             union = str1.length;
//         } else {
//             inter = str1.filter(el => str2.includes(el)).length;
//             union = str2.length;
//         }
//         union += str2.filter(el => !str1.includes(el)).length;
//     } else {
//         if (str1.length === 0 && str2.length === 0) return 65536;
//         else {
//             inter = 1;
//             union = str1.length === 0 ? str2.length : str1.length;
//         }
//     }
//     console.log(str1, str2, inter, union);
    
//     return Math.floor((inter / union) * 65536);
// }

// function test (str) {
//     const arr = [];
    
//     for (let i = 0; i < str.length - 1; i++) {
//         const regex = /^[a-zA-Z]*$/;
        
//         for (let j = i + 1; j <= i + 1; j++) {
//             if (regex.test(str[i] + str[j])) {
//                 arr.push((str[i] + str[j]).toUpperCase());
//             }
//         }
//     }
//     return arr;
// }

// // function makeStr(array) {
// //     const arr = [];
// //     const regex = /[\W0-9_]/
// //     array.split('')
// //     for(let i = 1 ; i < array.length; i ++) {
// //         const elem = array[i-1] + array[i];
// //         if(regex.test(elem)) continue;
// //         arr.push(elem.toLowerCase());
// //     }
// //     return arr
// // }