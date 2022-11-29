# 직사각형 별찍기

## **💫 문제 설명**

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

### **❗ 제한 조건**

n과 m은 각각 1000 이하인 자연수입니다.

### **〉 입출력 예**

입력
```
5 3
```

출력
```
*****
*****
*****
```
## **🧐 CODE REVIEW**

### **🌱 나의 풀이**

```
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  b = Number(n[1]);

  let star = "";

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
});
```

#### **해설**

```
  for (let i = 0; i < b; i++) {}
```

세로 b의 길이보다 작은 동안 증가하는 index i

```
  for (let j = 0; j < a; j++) {
      star += "*";
  }
```

가로 a의 길이보다 작은 동안 증가하는 index j
그 개수만큼 "\*" 별을 찍어줌

### **📌 다른 풀이**

```
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
```

#### **해설**

```
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
```

repeat()함수를 사용해서 별을 찍어줬음

### **✨ 정리**

1. repeat()
   repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

#### 구문

str.repeat(count);

## 📚참고 사이트

- **🔗문제 링크**<br/>
  https://school.programmers.co.kr/learn/courses/30/lessons/12969

- **[MDN]**<br/>
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
