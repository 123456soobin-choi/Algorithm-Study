function solution(name, yearning, photo) {
    let answer = [];
    
    for(let i=0; i<photo.length; i++){
        let count = 0; // 점수를 더할 변수 선언
        for(let j=0; j<photo[i].length; j++){
            for(let z=0; z<name.length; z++){
                if(photo[i][j] === name[z]){
                    count += yearning[z]; // 바로 yearning[z]로 접근
                }
            }
        }
        answer.push(count);
    }
    
    return answer;
}