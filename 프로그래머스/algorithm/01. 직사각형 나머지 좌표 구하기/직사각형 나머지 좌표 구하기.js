function solution(v) {
    let answer = [0, 0];

    for (let i = 0; i < 2; i++) {
        if (v[0][i] === v[1][i]) answer[i] = v[2][i];
        if (v[1][i] === v[2][i]) answer[i] = v[0][i];
        if (v[0][i] === v[2][i]) answer[i] = v[1][i];
    }

    return answer;
}