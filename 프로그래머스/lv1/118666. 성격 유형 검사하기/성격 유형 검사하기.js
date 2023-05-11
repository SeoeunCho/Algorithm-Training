function solution(survey, choices) {
    let answer = '';
    
    const MBTI = {};
    const types = ["RT", "CF", "JM", "AN"];
    
    // MBTI 타입별 객체 만들기
    types.forEach(type => {
        type.split('').forEach(el => MBTI[el] = 0);
    })
    
    const check = survey.map((el, i) => {
        if (choices[i] < 4) MBTI[el[0]] += 4 - choices[i];
        if (choices[i] > 4) MBTI[el[1]] += choices[i] - 4;
    })
    
    answer += MBTI['R'] >= MBTI['T'] ? 'R' : 'T';
    answer += MBTI['C'] >= MBTI['F'] ? 'C' : 'F';
    answer += MBTI['J'] >= MBTI['M'] ? 'J' : 'M';
    answer += MBTI['A'] >= MBTI['N'] ? 'A' : 'N';
    
    return answer;
}