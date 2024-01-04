const iskeepingDistance = (place) => {
  let roomInfo = place.map((rooms) => rooms.split(''));

  let queue = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomInfo[i][j] === 'P') {
        queue.push([i, j]);
      }
    }
  }

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomInfo[nx][ny] === 'X') continue;
      if (roomInfo[nx][ny] === 'P') return 0;

      for (let j = 0; j < 4; j++) {
        let aroundNX = nx + dx[j];
        let aroundNY = ny + dy[j];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (roomInfo[aroundNX][aroundNY] === 'P') return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  let keepingDistance = [];
  for (let i = 0; i < 5; i++) {
    keepingDistance.push(iskeepingDistance(places[i]));
  }

  return keepingDistance;
}

// 먼저 1번 움직였을 때 1) 파티션인지 2) 빈테이블인지 3) 응시자인지 판단하고 그 마다의 결과로 옮겨준다.
// 여기서 빈테이블 일 경우에만 1 거리를 움직여서 거기서 또 1) 2) 3)을 확인한다.
// 모든 경우를 만족한다면 1, 아니면 0을 return 