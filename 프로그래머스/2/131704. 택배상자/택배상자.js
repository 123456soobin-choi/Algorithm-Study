function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    if (order[idx] !== i) {
      stack.push(i);
    } else {
      idx++;
      answer++;
    }

    while (stack.length !== 0 && stack.at(-1) === order[idx]) {
      stack.pop();
      idx++;
      answer++;
    }
  }

  return answer;
}

// .at()은 반환될 값의 인덱스를 받는다.
// 음수의 인덱스를 전달하면 배열 또는 문자열의 끝에서 계산해서 찾은 요소를 반환 하고
// 그렇지 않으면 undefined를 반환한다.

