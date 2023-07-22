function solution(s) {
    let answer = 0;
    let arr = [];
    
    for(let i=0; i < s.length; i++){
        arr.push(s[i]);
        
        const same = arr.filter((i) => i === arr[0]);
        const notSame = arr.filter((i) => i !== arr[0]);
        
        if(same.length === notSame.length){
            answer += 1;
            arr = []; // 초기화
        }
    }
    
    if(arr.length !== 0){
        answer += 1;
    }
        
    return answer;
}