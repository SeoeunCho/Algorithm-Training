function solution(elements) {
    const set = new Set();
    for (let i = 1; i <= elements.length; i++) {
    // 원순열 만들기 i개의 원소를 뒤에 추가해줌
    const els = elements.concat(elements.slice(0, i));
    // console.log('1=', i, els, elements.slice(0, i));
    
    // Set 갱신
    for (let j = 0; j < elements.length; j++) {
        let sum = els.slice(j, j + i).reduce((a, c) => a + c, 0);
        // console.log('2=', j, j + i, els.slice(j, j + i), sum);
        set.add(sum);
    }
    
    // for (const item of set) console.log('3=', item);
  }
  return set.size;
}