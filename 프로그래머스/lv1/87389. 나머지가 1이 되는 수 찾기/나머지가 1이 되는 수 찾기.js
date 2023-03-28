function solution(n) {
  let answer = 0;
  let num = n - 1;
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
      console.log(divisors);
      answer = divisors[1];
    }
  }
  return answer;
}