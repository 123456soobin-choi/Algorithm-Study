# 모의고사

## **문제 설명**

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### **제한 조건**

시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

### **입출력 예**

```
answers	    return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

```

## **🧐CODE REVIEW**

### **🌱나의 풀이**

```
function solution(answers) {
  let answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let fCount = answers.filter((x, i) => x === first[i % 5]).length;
  let sCount = answers.filter((x, i) => x === second[i % 8]).length;
  let tCount = answers.filter((x, i) => x === third[i % 10]).length;

  let max = Math.max(fCount, sCount, tCount);

  if (fCount === max) answer.push(1);
  if (sCount === max) answer.push(2);
  if (tCount === max) answer.push(3);

  return answer;
}

```

#### **해설**

< 오답 풀이>

나는 수포자 1~3을 10개의 element를 가진 배열로 만들고 for 반복문을 돌려서
아래와 같이 작성했었다.

```
  let fCount = answers.filter((x) => x === first[i]).length;
```

그러나 filter(x)가 아니라 filter(x, i)를 써서 answers 배열의 index를 가져와 비교했어야 했다.
또한 [i % 해당 배열의 길이]를 하면 i(index)는 무조건 배열의 length보다 작으므로
나머지는 항상 index 그 자체가 된다.
ex) 0 % 5 의 나머지는 0, 1 % 5 의 나머지는 1,,, \*수포자 1~3이 어떤 규칙으로 나열되는 배열인지 문제에서 주어지지 않아도
[i % fCount.length] 이렇게 쓰면 해당 배열의 인덱스를 구해서 각 element에 접근할 수 있고
filter 로 기준이 되는 answers 의 element와 하나씩 비교할 수 있다.

```
  let fCount = answers.filter((x, i) => x === first[i % 5]).length;
  let sCount = answers.filter((x, i) => x === second[i % 8]).length;
  let tCount = answers.filter((x, i) => x === third[i % 10]).length;
```

답을 오름차순으로 정렬하라고 해서 아래와 같이 단순하게 sort()를 생각했었다.

```
  arr = [fCount, sCount, tCount];
  answers = arr.sort();
```

그러나 단순히 일치하는 값의 개수를 구하는 게 아니라 '최대값'을 비어있는 배열 answer에 '담아야' 한다.
Math.max(arr1, arr2,,,) 최대값을 구하는 함수와 push(수포자의 이름 -숫자 1/2/3)으로 해결할 수 있다/

```
  let max = Math.max(fCount, sCount, tCount);

  if (fCount === max) answer.push(1);
  if (sCount === max) answer.push(2);
  if (tCount === max) answer.push(3);
```

### **📌다른 풀이**

```
function solution(answers) {
    var answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == man1[i % man1.length]) count[0]++;
        if(answers[i] == man2[i % man2.length]) count[1]++;
        if(answers[i] == man3[i % man3.length]) count[2]++;
    }

    const max = Math.max(count[0], count[1], count[2]);
    for(let i = 0; i < count.length; i++) {
        if(max == count[i]) answer.push(i + 1);
    }

    return answer;
}
```

#### **해설**

```
  let count = [0, 0, 0];
```

이렇게 최대값을 담을 배열을 만들고

```
  count[0]++
```

두 배열을 비교해서 일치할 때 ++ 증가한다.

```
  const max = Math.max(count[0], count[1], count[2]);
  for(let i = 0; i < count.length; i++) {
      if(max == count[i]) answer.push(i + 1);
```

최대값이 count의 i번째 element와 같으면 answer 배열에 가장 많은 문제를 맞힌 사람을 넣는다. \*수포자는 1번부터 3번까지 있으므로 i+1을 헤야한다.

### **✨정리**

1. filter()

```
arr.filter(callback(element[, index[, array]])[, thisArg])
```

index - Optional
처리할 현재 요소의 인덱스.

```
// Arrow function
filter((element, index) => { /* ... */ } )
```

2. Math.max()
   : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
   최대값 구하기 -> Math.max() 기억하자!

## 📚참고 사이트

- **🔗문제 링크**<br/>
  https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

- **[TypedArray.prototype.filter()]**<br/>
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter
