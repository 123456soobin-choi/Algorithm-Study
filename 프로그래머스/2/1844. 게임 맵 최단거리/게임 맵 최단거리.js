function solution(maps) {
    // 행의 개수 
    const yLen = maps.length;
    // 열의 개수
    const xLen = maps[0].length;
    // 도착지점의 행 y좌표
    const goalY = yLen - 1;
    // 도착지점의 열 x좌표
    const goalX = xLen - 1;
    // 동서남북 방향으로 이동 시 칸 수
    const dy = [0, 0, 1, -1];
    // 동서남북 방향으로 이동 시 칸 수
    const dx = [-1, 1, 0, 0];
    
    // BFS에 사용할 queue 생성
    const queue = [];
    // 0,0 좌표와 이동한 칸 수 1 담아서 시작
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        // 현재 위치와 현재까지 이동한 칸 수를 queue에서 가져와 할당
        const [curY, curX, move] = queue.shift();
        // 현재 위치가 도착지점 좌표와 같으면 이동한 칸 수 그대로 반환
        if (curY === goalY && curX === goalX) return move;
        
        // 상하좌우로 이동하기 위해 4번 반복문 돌림
        for (let i = 0; i < 4; i++) {
            // 상하좌우로 이동했을 때의 행과 열 좌표
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            // 해당 좌표가 맵을 벗어나지 않고 벽이 없는 자리 1인 경우
            if (ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
                // queue에 해당 좌표와 이동한 칸 수를 1증가시켜 넣음
                queue.push([ny, nx, move + 1]);
                // 해당 칸을 다시 방문하지 않도록 0을 할당
                maps[ny][nx] = 0;
            }
        }
    }
    
    // 
    return -1;
}

// 최단거리 BFS