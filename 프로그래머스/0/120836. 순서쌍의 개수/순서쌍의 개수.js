function solution(n) {
    let answer = 0;
    let arr = [];
    let index = 1;
    
    // n이 제곱수인 경우 (제곱근,제곱근)
   while (index <= n) {
      if (n % index === 0) {
          arr.push(index);
      }
      index++;
    }
    answer = arr.length;
    
    return answer;
}