function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i=1; i <= completion.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }

}