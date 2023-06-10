function solution(a, b, n) {
    let answer = 0;
    
    // n이 a보다 크거나 같은 동안 반복
    while(n >= a){
        let quotient = parseInt(n / a); // n을 a로 나눈 몫, 정수로 반환
        n = quotient * b + n % a; // 몫 * b개 만큼 + 나머지
        answer += quotient * b;
    }
    return answer;
}

/* n을 a로 나누었을 때 몫 quotient
나머지 n % a 있을 수도 없을 수도
n = quotient * b + n % a !!!
a만 상수 b와 n은 변수
answer += b
*/