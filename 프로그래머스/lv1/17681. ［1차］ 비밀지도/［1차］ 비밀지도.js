function solution(n, arr1, arr2) {
    let answer = [];
    for(let i=0; i<n; i++){
        let result = ''; // 특정 문자를 담을 빈 문자열
        let str1 = arr1[i].toString(2).padStart(n,0);
        let str2 = arr2[i].toString(2).padStart(n,0);
        for(let j=0; j < n; j++){
            if(str1[j] === '1' || str2[j] === '1'){
                result += '#'
            }else{
                result += ' '
            }
        }
        answer.push(result); // 결과만 answer 배열에 push
    }
    return answer;
}

/* 2진법 16 8 4 2 1
num.toString(기수) 10진수 -> 다른 진수
padStart() 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
*/