function solution(number, limit, power) {
    let answer = 0;
    let counter = 0;
    
    for(let i=1; i<=number; i++){
        counter = 0;
        
        for( let j=1; j<=i/2; j++){
            if(i%j === 0){
                counter+=1;
            }
        }
        counter +=1;
        
        if(counter > limit){
            answer +=  power;
        }else{
            answer += counter;
        } 
    }
    return answer;
}