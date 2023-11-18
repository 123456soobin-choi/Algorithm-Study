function solution(n, wires) {
    // var answer = -1;
    let answer = n-2;
    // 1. 송전탑끼리 연결된 선 정보를 통해 각 송전탑이 연결된 송전탑 리스트 만들기
    let wireMap = wires.reduce((prev, cur) => {
        prev.set(cur[0], prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]);
        prev.set(cur[1], prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]);
        return prev;
    }, new Map());
    
    // console.log(wireMap);
    
    // 2. 모든 전선를 하나씩 끊어보면서 두 전력망의 송전탑 개수 차를 구한다.
    for (let i=0; i<wires.length; i++) {
        // 3. 2를 통해 구한 두 전력망 송전탑 개수 차의 최소값을 반환
        // console.log(answer, 'answer');
        answer = Math.min(getDiffOfDividedArea(i), answer);
    }
    
    function getDiffOfDividedArea(curIdx) {
        // 2-1. 두 전력망 차이를 구할 때 한 전력망 내 송전탑 개수 구하기
        let leftConnection = new Set();
        leftConnection.add(wires[curIdx][0], 1);
        
        for (let v of leftConnection.keys()) {
            wireMap.get(v).forEach(value => {
                if (value !== wires[curIdx][1]) {
                    // console.log(leftConnection, 'leftConnection');
                    leftConnection.add(value, 1);
                }
            })
        }
        
    // 2-2. 전체 송전탑 개수(n)에서 하나의 전력망 개수*2 를 뺀 절대값이 두 전력망 송전탑 개수 차임
    return Math.abs(n - leftConnection.size * 2);
    }
    
    return answer;
}

// 완전탐색은 모든 경우의 수를 확인한 결과들 중 비교하여 구하고자 하는 값을 찾는 것
