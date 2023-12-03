function solution(begin, end) {
    let answer = [];
    
    // num을 넣으면 약수중에서 자신을 빼고 가장 큰 수를 리턴
    function check(num){       
        let checkArr=[];        
        if(num===1){
            return 0;
        }
        // 약수 구하기
        for(let i =2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                checkArr.push(i);
                if(num/i <= 1e7){
                    return num/i;
                }
            }
        }
        if(checkArr.length!==0){
            return checkArr[checkArr.length-1];
        }     
        // 없다면 1을 리턴 (1은 모두 나눠짐.)
        return 1;
    }
    
    
    for(let i = begin;i<=end;i++){
        let checkNum = check(i);
        if(checkNum!==undefined){
             answer.push(checkNum);
        }
    }
    
    return answer;
}

// 배치규칙 - 자기자신을 제외한 배수에 해당하는 칸에 배치
// 마지막에 배치된 블록의 넘버 - 각 지점의 약수 목록 중에 자기 자신을 제외한 최대 약수
// 수의 집합에서 약수끼리는 서로 곱을 통해 원래의 수를 만들어 줄 수 있음
// sqrt(N)만 구함 두 수의 곱으로 구할 수 있는 N의 최대값이 제곱근