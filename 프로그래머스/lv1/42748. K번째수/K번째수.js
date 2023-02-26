function solution(array, commands) {
    let answer = [];

    for(let i =0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0] -1,commands[i][1]).sort((a, b) => a - b)[commands[i][2] -1])
    }
    return answer;
}

// 배열의 index는 0부터 시작하지만 slice(begin, end)에서 begin은 1부터 시작하므로 1을 빼야 함!
// 마찬가지로 k번째 값을 구하고 싶다면 index 접근할 때는 [k-1] 이렇게 써야 함!  