function solution(s) {
    let answer = [];
    let stack = [];
        
    for(let i=0; i < s.length; i++){
        if(stack.includes(s[i])){
            answer.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
        }else{
            answer.push(-1);
            stack.push(s[i])
        }
    }
    
    return answer;
}

// stack 자료 구조! 가장 마지막 값과 그 전의 가까운 값 거리 비교
// s[i]가 stack 에 있는지 없는지
// lasIndexOf() 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환하는 메서드!!!
