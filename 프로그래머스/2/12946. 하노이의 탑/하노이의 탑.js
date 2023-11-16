function solution(n) {
    let answer = [];
    
    function hanoi(n, from, to, rest){
        // 재귀식 종료문
        if (n === 1) {
            console.log( `${from} ${to}`);
            answer.push([from, to]);
        } else {
          // 우선 n-1 개의 원반을 위에서 걷어낸다.
          // 주의할 점은 n-1 개의 원반이 가야할 곳이 
          // 목적지(to)가 아니라 빈 공간(rest)이다.
          hanoi(n-1, from, rest, to);
          console.log(`${from} ${to}`); // 현재 단계의 원반 옮겨주기
          answer.push([from, to]);
          hanoi(n-1, rest, to, from);
          // 이후 n-1개의 원반을 옮긴 원반에 쌓아주기
        }
    }
    
    hanoi(n,1,3,2);
    return answer
}
