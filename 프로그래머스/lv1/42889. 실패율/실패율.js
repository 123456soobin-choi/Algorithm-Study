function solution(N, stages) {
    let answer = [];
    
    for (let i=1; i<=N; i++) {
        let count = stages.filter(e => e === i).length;
        let num = stages.filter(e => e >= i).length;
        answer.push([i, count/num]);
        
    }
    answer.sort((a,b) => b[1]-a[1]);
    return answer.map((e) => e[0]);
}

/* 1, 2, 3, ... N
stages는 도전 중, 멈춰있는, 통과하지 못한 스테이지 번호
stage 1 1의 개수 / stages.length
stage 2 2의 개수 / stages.length - (1의 개수)
실패율 높 -> 낮 내림차순 정렬
*/