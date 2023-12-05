function solution(n, left, right) {
    const answer = [];

    while (left <= right) {
        answer.push(Math.max(Math.floor(left / n), left++ % n) + 1);
    }

    return answer;
}

// left ~ right 범위의 숫자를 좌표로 변환
// left ~ right 범위의 임의의 숫자 num에 대해서 좌표 (r, c)를 구하는 공식?
// r = floor(num / n)
// c = num % n
// 특정한 좌표에 있는 숫자는 x좌표 또는 y좌표중 큰 숫자+1