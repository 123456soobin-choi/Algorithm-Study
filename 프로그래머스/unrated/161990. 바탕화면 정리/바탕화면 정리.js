function solution(wallpaper) {
    const X = [];
    const Y = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                Y.push(i); // 행
                X.push(j); // 열
            }
        }
    }
    
    Y.sort((a, b) => a - b);
    X.sort((a, b) => a - b);
    
    return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}

// 행 열 좌표값 구하고 오름차순 정렬]
// 시작점 (y의 가장 작은 값, x의 가장 큰 값)
// 끝점 (y의 가장 큰 값 + 1, x의 가장 큰 값 + 1)