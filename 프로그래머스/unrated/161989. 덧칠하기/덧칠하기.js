function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    for (let element of section) {
        if(painted < element){
            answer++;
            painted = element + m -1;
        }
    }
    
    return answer;
}