function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    // console.log(i); // 2 3
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        // console.log(j); // 4 6 8 10 9
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}

console.log(solution(10));
