function solution(s) {
    var answer = '';
    
    let splitStr = [...s];
    answer = splitStr.sort().reverse().join("")
    
    return answer;
}

// 문자열을 아스키코드로 변환하여 작>큰 순서로 정렬