function solution(s) {
    const arr = s.split("");
    let sum = 0;
    
    for (let i=0; i<arr.length; i++){
        if(Number(arr[i])){
            sum += Number(arr[i])
        }
    }
    
    return sum;
}