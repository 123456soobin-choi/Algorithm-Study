function solution(k, m, score) {
    let answer = 0;

    if(score.length < m){
        return 0;
    }
    
    score.sort((a,b) => a-b);
    
    while(score.length >= m){
        let box = score.splice(score.length - m, m);
        answer += Math.min(...box)*m;
    }
    
    return answer;
}