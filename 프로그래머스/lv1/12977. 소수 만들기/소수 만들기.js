function solution(nums) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        if (i !== j && i !== z && j !== z) {
          sum = nums[i] + nums[j] + nums[z];
          if (division(sum) === 2) {
            answer += 1;
          }
        }
      }
    }
  }
  return answer;
}

function division(sum) {
  count = 0;
  for (let i = 0; i <= sum; i++) {
    if (sum % i === 0) {
      count += 1;
    }
  }
  return count;
}