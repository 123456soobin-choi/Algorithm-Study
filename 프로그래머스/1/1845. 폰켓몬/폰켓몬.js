function solution(nums) {
  const max = nums.length / 2;
  const arr = new Set(nums);

  return arr.size > max ? max : arr.size
}