function solution(dartResult) {
    let answer = 0;
    let num = 0;
    let arr = [];
    
    for (let i=0; i < dartResult.length; i++) {
        // 숫자인 경우
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            // 10인 경우
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                num = 10;
                i++; // i+2로 만들기 10을 지나서 검사
            } else {
                num = dartResult[i];
            }
        // 문자인 경우
        } else if (dartResult[i] === "S") {
            arr.push(num);
        } else if (dartResult[i] === "D") {
            arr.push(Math.pow(num, 2));
        } else if (dartResult[i] === "T") {
            arr.push(Math.pow(num, 3));
        } else if (dartResult[i] === "#") {
            arr[arr.length - 1] *= -1
        } else {
            arr[arr.length - 1] *= 2
            arr[arr.length - 2] *= 2
        }
    }
    for(let i = 0; i < arr.length; i++) {
        answer += Number(arr[i]);
    }
    return answer;
}

// 숫자인 경우와 문자인 경우
// 10인 경우와 0~9인 경우 구분 <- dartResult 요소들은 숫자가 아니라 문자열
// S D T일 때 제곱 처리 -> #인 경우와 *인 경우 처리 --> 마지막에 숫자로 변환