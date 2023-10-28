function solution(numbers) {
  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)];
    const primeNumbers = permutation.filter((arr) => {
      const number = +arr.join("");
      const isPrimeNumber = checkPrimeNumber(number);
      return isPrimeNumber;
    });

    primeNumbers.forEach((arr) => {
      answer.add(+arr.join(""));
    });
  }
  return answer.size;
}

const checkPrimeNumber = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    const remainder = number % i;
    if (remainder === 0) return false;
  }
  return true;
};

const getPermutation = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutation(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }

  return results;
};

// function solution(numbers) {
//     let answer = 0;
//     const arr = numbers.split("");
    
//     // 조합 nCr
//     const getCombinations = function (arr, selectNumber) {
//         const results = [];
//         if (selectNumber === 1) return arr.map((el) => [el]); 
//         // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//         arr.forEach((fixed, index, origin) => {
//             const rest = origin.slice(index + 1); 
//             // 해당하는 fixed를 제외한 나머지 뒤
//             const combinations = getCombinations(rest, selectNumber - 1); 
//             // 나머지에 대해서 조합을 구한다.
//             const attached = combinations.map((el) => [fixed, ...el]); 
//             // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
//             results.push(...attached); 
//             // 배열 spread syntax 로 모두다 push
//         });

//         return results; // 결과 담긴 results return
//     }
    
//     // 소수판별함수
//     function isPrime(num) {
//         if(num === 2) {
//             return true;
//         }
//         for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//             if(num % i === 0){
//             // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
//             return false;
//         }
//     }
//         // 나눠진 수가 없다면 해당 수는 소수이므로 return true
//         return true; 
//     }

//     return answer;
// }

/* 1. numbers 문자열 하나씩 쪼개서 배열 arr에 넣기
ex) [ 0, 1, 2, 3, 4, 5, 6 ]
2. 배열의 원소 조합하기 nCr
1자리 ~ 최대 7자리
예외처리)
제일 앞에 0이 있는 경우 0을 삭제하고
그 값과 중복인 값이 있으면 하나만 남기기
-> 모든 경우의 수를 구하고 그 결과를 배열 arr2에 넣기
3. arr2 의 모든 원소를 검사해서 소수인지 판별
4. 소수에 해당하는 개수 return
*/