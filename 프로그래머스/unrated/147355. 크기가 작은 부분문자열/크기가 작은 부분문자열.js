function solution(t, p) {
    let answer = 0;
    let subStr = p.length;
    
    for(let i=0; i<t.length - p.length + 1; i++){
        let slicedT = t.slice(i, i + subStr);
        if(Number(slicedT) <= Number(p)){
            answer++;
        }
    }
    
    return answer;
}

// t에서 p의 길이를 빼는 것, slice에서 i 를 더해주는 것!