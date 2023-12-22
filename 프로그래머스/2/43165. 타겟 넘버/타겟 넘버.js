function solution(numbers, target) {
    let answer = 0;
    // dfs함수에 루트 노드의 인덱스와 연산 결과의 합을 0으로 설정하여 넘긴다
    dfs(0, 0);
    
    function dfs (idx, sum) {
        // 인덱스가 숫자 배열의 길이와 같다는 것은 배열의 마지막 요소까지 모두 순회했다는 의미
        if (idx === numbers.length) {
            // 연산 결과의 합이 타겟 넘버와 같다면
            if (sum === target) {
                // answer 방법의 수를 올려주고
                answer++;
            }
            // 그렇지 않다면 함수를 빠져나간다
            return;
        }
        
        // 인덱스를 하나씩 올리며 배열을 모두 순회하며 모든 요소를 더하는 연산을 수행한다
        dfs(idx + 1, sum + numbers[idx]);
        // 인덱스가 배열의 마지막에 도달하면 이전 인덱스에서 해당 요소를 빼는 연산을 수행한다
        dfs(idx + 1, sum - numbers[idx]);
        // -> 덧셈 연산을 수행하다가 함수가 종료되면 뻴셈 연산을 수행하는 작업을 반복한다
    }
    
    return answer;
}

// DFS 깊이 우선 탐색 : 그래프에서 다른 노드를 방문하기 전에 하나의 노드를 깊게 파고들며 순회하는 검색 알고리즘