function solution(survey, choices) {
    let answer = '';
    const obj = {
        'R': 0, 
        'T': 0, 
        'C': 0, 
        'F': 0, 
        'J': 0, 
        'M': 0, 
        'A': 0, 
        'N': 0
    };
    
    const check = survey.map((el, i) => {
        if (choices[i] < 4) obj[el[0]] += 4 - choices[i];
        if (choices[i] > 4) obj[el[1]] += choices[i] - 4;
    })
    
    answer += obj['R'] >= obj['T'] ? 'R' : 'T';
    answer += obj['C'] >= obj['F'] ? 'C' : 'F';
    answer += obj['J'] >= obj['M'] ? 'J' : 'M';
    answer += obj['A'] >= obj['N'] ? 'A' : 'N';
    
    return answer;
}