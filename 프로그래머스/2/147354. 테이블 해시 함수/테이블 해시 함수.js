function solution(data, col, row_begin, row_end) {
  let answer = 0;

  // 데이터를 col-1 기준으로 오름차순 정렬
  // 동일한게 있다면 0번째 원소를 기준으로 내림차순 정렬
  const sort_data = data.sort((a, b) => {
    if (a[col - 1] < b[col - 1]) {
      return a[col - 1] - b[col - 1];
    } else if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
  });

  //
  for (let i = row_begin; i <= row_end; i++) {
    // 정렬된 데이터에서 i-1번째부터 각 값을 i로 나누어서 더하기
    const temp = sort_data[i - 1].reduce((a, c) => a + (c % i), 0);
    // ^는 XOR연산자, answer에 누적하기
    answer ^= temp;
  }

  return answer;
}