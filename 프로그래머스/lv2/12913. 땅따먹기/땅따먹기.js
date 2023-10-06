function solution(land) {
  let answer = [];
  let len = land.length;
  for (let i = 1; i < len; i++) {
    land[i][0] += Math.max(
      land[i - 1][1],
      land[i - 1][2],
      land[i - 1][3]
    );
    land[i][1] += Math.max(
      land[i - 1][0],
      land[i - 1][2],
      land[i - 1][3]
    );
    land[i][2] += Math.max(
      land[i - 1][0],
      land[i - 1][1],
      land[i - 1][3]
    );
    land[i][3] += Math.max(
      land[i - 1][0],
      land[i - 1][1],
      land[i - 1][2]
    );
  }
  answer = land[land.length - 1];

  return Math.max(...answer);
}

// land[i] max값 index 와 같지 않은 land[i+1] 의 max값