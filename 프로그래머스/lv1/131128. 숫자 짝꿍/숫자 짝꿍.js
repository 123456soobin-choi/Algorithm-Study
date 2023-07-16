function solution(X, Y) {
    let answer = "";
    X = X.split("");
    Y = Y.split("");
    
    for (let i=0; i<10; i++) {
        const xCount = X.filter((x) => Number(x) === i).length;
        const yCount = Y.filter((x) => Number(x) === i).length;
        const common = Math.min(xCount, yCount); // 
        answer += String(i).repeat(common); // 
    }
    
    if (answer === "") {
        return "-1";
    } else if (Number(answer) === 0) {
        return "0";
    }
    
    return answer.split("").sort((a, b) => Number(b) - Number(a)).join("");
}

// X, Y 공통의 숫자를 구해서 Max 값 구하고 문자열로 변환