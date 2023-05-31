function solution(arr)
{
    let answer = [arr[0]];
    
    for(let i =1; i < arr.length; i++){
        let top = answer[answer.length - 1]; // 가장 위의 값
        if(top !== arr[i]){
            answer.push(arr[i])
        }
    }
    
    return answer;
}