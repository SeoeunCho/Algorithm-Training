function solution(babbling) {
    let answer = 0;
    let words = ['aya', 'ye', 'woo', 'ma'];
    
    for (let i = 0; i < babbling.length; i++) {
        let babble = babbling[i];
        
        for (let j = 0; j < words.length; j++) {
            if (babble.includes(words[j].repeat(2))) {
                break;
            }
            babble = babble.split(words[j]).join(' ');
        }
        console.log(babble)
        if (babble.split(' ').join('').length === 0) {
            answer++
        }
    }
    
    return answer;
}