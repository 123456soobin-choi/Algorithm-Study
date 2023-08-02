function solution(ingredient) {
    let answer = 0;
    const arr = [];
    
    ingredient.forEach((item, idx) => {
        arr.push(item);
        
        if(arr.slice(-4).join("") === "1231"){
            arr.pop();
            arr.pop();
            arr.pop();
            arr.pop();
            answer++;
        }
    })
    
    return answer;
}