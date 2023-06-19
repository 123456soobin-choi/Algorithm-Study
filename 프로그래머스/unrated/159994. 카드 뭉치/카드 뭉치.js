function solution(cards1, cards2, goal) {
    
    for(let i=0; i<goal.length; i++){
        if(goal[i] === cards1[0]){
            cards1.shift(); // 배열 맨 앞 요소 삭제
        }else if(goal[i] === cards2[0]){
            cards2.shift(); // 배열 맨 앞 요소 삭제
        }else{
            return "No";
        }
    }

    return "Yes";
}

// stack 자료구조 shift()