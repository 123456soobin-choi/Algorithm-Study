function solution(n, m) {
  var answer = [];
  let gcd = 1;
  let lcm = 1;

  // n과 m중 작은 수와 같아질 때까지 반복하여 '두 수를 동시에 나눌 수 있는 수'구하기
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
    // '두 수를 곱한 값을 최대공약수로 나누면 최소공배수!!!'
    lcm = (n * m) / gcd;
    answer = [gcd, lcm];
  }
  return answer;
}

/* 
1,3 1,2,3,4,6,12
1,2 1,5
소수인 수와 여러 개의 약수를 가지는 수 2가지 경우
최대공약수(GCD)는 공통된 약수 중 가장 큰 수
최소공배수는(LCM) 공통된 배수 중 가장 작은 수
*/
