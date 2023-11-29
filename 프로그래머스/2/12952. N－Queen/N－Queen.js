function solution(n) {
    let answer = 0;
    
    const dfs = (board, row) => {
        if (row === n) {
            answer++; // row의 값이 n이랑 같은 경우 모든 줄에 퀸을 다 놓았다는 뜻 증가
        } else {
            for (let i = 1; i <= n; i++) {
                board[row+1] = i; // 다음 라인에 퀸을 배치하고
                // isValid 라는 함수를 통해 해당 위치 퀸이 유효한지 검사
                if (isValid(board, row+1)) {
                    // 유효하다면 다음위치 계속 탐색
                    dfs(board, row+1);
                }
            }
        }
    }
    
    const isValid = (board, row) => {
        // 현재라인과 이전 라인을 검사
        for (let i = 1; i < row; i++) {
            // 같은 라인에 있는 경우 배치 불가
            if (board[i] === board[row]) {
                return false;
            }
            // 대각 라인에 있는 경우 배치 불가
            if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }
    
    for (let i = 1; i <= n; i++) {
        const board = new Array(n+1).fill(0);
        board[1] = i; // 체스판의 첫번째 세로라인 중 i칸에 퀸을 배치
        dfs(board, 1); // 배치가 완료된 체스판과 현재 세로라인인 1을 dfs 함수에 전달
    }
    
    return answer;
}

// 가로 세로 대각선에 퀸이 서로 없어야 함
// 1차원 배열
// 재귀 backtracking DFS 개념!!!