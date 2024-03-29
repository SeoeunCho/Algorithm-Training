function solution(n, m) {
    let gcd = 1; // 최대공약수
    let lcm = 1; // 최소공배수
    
    let num = n > m ? m : n;
    
    // 최대공약수 구하기
    for (let i = 1; i <= num; i++) {
        if (n % i === 0 && m % i === 0) gcd = i;
    }

    // 최소공배수 구하기 -> 두수의 곱 = 최대공약수 * 최소공배수
    lcm = n * m / gcd;
    
    return [gcd, lcm];
}