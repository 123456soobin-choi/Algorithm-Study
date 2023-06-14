function solution(k, score) {
    let answer = [];
    let stack = [];
    
    for(let i=0; i <score.length; i++){
        let eachScore = score[i];
        
        if(stack.length < k){
            stack.push(eachScore);
        }
        
        if(score[i] > Math.min(...stack)){
            stack.pop();
            stack.push(score[i]);
            stack.sort((a, b) => b -a);
        }
        
        answer.push(Math.min(...stack))
    }
    
    return answer;
}