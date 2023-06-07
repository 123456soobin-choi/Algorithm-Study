function solution(food) {
    let answer = '';
    let reversed = [];
    
    for(let i=1; i<food.length; i++){
        if(food[i] !== 1){
            let count = parseInt(food[i]/2); // 반복 횟수
            let str = i.toString(); // 숫자 i를 문자로 변환
            answer += str.repeat(count); // 왼쪽 문자열 완성
        }
    }

    reversed = answer.split('').reverse().join(''); // 오른쪽 문자열
    
    return answer += 0 + reversed;
}

/* 
1. food[i]를 2를 나누었을 때 몫 구하기
2. 그 몫만큼 i 쓰기
만약 food[i]가 1일 경우 쓰지 않음
3. 중간에 0넣고 대칭 문자열 넣기
*/