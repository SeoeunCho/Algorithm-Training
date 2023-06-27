const solution = (cacheSize, cities) => {
    let answer = 0;
    let arr = [];
    
    // 1. 모든 도시 이름을 대문자로 치환
    cities = cities.map(el => el.toUpperCase());
    
    // 2. cacheSize가 0이면 모든게 cache miss이므로 도시배열길이*5를 반환
    if (cacheSize === 0) return cities.length * 5;
    
    // 3. 배열을 순회하여 cache hit면 배열의 맨 뒤로 푸쉬하고
    // cache miss일 경우(배열이 꽉찼으면 맨앞을 제거하고) 배열의 맨뒤로 푸쉬
    for (let i = 0; i < cities.length; i++) {
        const idx = arr.findIndex(el => el === cities[i]);
        if (idx !== -1) {
            arr.splice(idx, 1);
            answer += 1;
        } else if (arr.length === cacheSize) {
            arr.shift();
            answer += 5;
        } else {
            answer += 5;
        }
        arr.push(cities[i]);
    }
    return answer;
}

// LRU 알고리즘 참고 https://dailylifeofdeveloper.tistory.com/355