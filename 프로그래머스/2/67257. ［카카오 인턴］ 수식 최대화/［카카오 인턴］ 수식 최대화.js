function solution(expression) {
  let answer = 0;
  let numbers = [];
  let expressions = [];
  let expressionLoc = 0;

  // 나올수 있는 6가지 경우의 수를 선언한다.
  const equations = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  // 숫자와 연산자를 분리하여 numbers와 expressions에 각각 저장한다.
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*"
    ) {
      expressions.push(expression[i]);
      numbers.push(expression.slice(expressionLoc, i));
      expressionLoc = i + 1;
    }
  }
  numbers.push(expression.slice(expressionLoc, expression.length));

  numbers = numbers.map((number) => +number); // 숫자들 배열
  let expressionCount = new Set([...expressions]).size; // 연산자 종류 수

  // 우선순위에 맞게 6가지의 연산을 한다.
  for (let i = 0; i < equations.length; i++) {
    let array = [...numbers];
    let expressionArr = [...expressions];
    let current = equations[i];

    for (let j = 0; j < expressionCount; j++) {
      let currentEquation = current[j];
      switch (currentEquation) {
        case "+":
          for (let k = 0; k < expressionArr.length; k++) {
            if (expressionArr[k] === "+") {
              let sum = array[k] + array[k + 1];
              array.splice(k, 2, sum);
              expressionArr.splice(k, 1);
              k--;
            }
          }
          break;
        case "-":
          for (let k = 0; k < expressionArr.length; k++) {
            if (expressionArr[k] === "-") {
              let sum = array[k] - array[k + 1];
              array.splice(k, 2, sum);
              expressionArr.splice(k, 1);
              k--;
            }
          }
          break;
        case "*":
          for (let k = 0; k < expressionArr.length; k++) {
            if (expressionArr[k] === "*") {
              let sum = array[k] * array[k + 1];
              array.splice(k, 2, sum);
              expressionArr.splice(k, 1);
              k--;
            }
          }
          break;
      }
    }

    // 절대값이 최대인 값을 반환한다.
    answer = Math.max(answer, Math.abs(...array));
  }

  return answer;
}

// slice(start, end) 추출한 요소를 포함한 새로운 배열 반환, 원본 수정하지 않음
// splice(start, deleteCount) 제거한 요소 담은 배열 반환, 원본 수정함