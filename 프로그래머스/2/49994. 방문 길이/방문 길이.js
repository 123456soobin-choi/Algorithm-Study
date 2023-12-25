function solution(dirs) {
    const direction = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1] };
    let visited = new Set();
    let now = [0, 0];
    
    for (let dir of dirs) {
        let nx = now[0] + direction[dir][0];
        let ny = now[1] + direction[dir][1];
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        visited.add(`${now[0]}${now[1]}${nx}${ny}`);
        visited.add(`${nx}${ny}${now[0]}${now[1]}`);
        
        now = [nx, ny];
    }
    
    return visited.size / 2;
}

// 이미 지난 길이거나 좌표평면 경계 넘어가는 경우 무시