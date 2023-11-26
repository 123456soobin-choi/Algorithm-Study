function solution(k, ranges) {
    const result = [];
    const [y, accr] = [[k], [0]];
    
    // 콜라츠 추측
    while (k > 1) {
        if (k % 2 === 0) k /= 2;
        else k = 3 * k + 1;
        y.push(k);
        // y는 우박수열
    }
    const last = y.length - 1; // 끝점 index
        
    // 넓이 구간합 계산후 저장
    for (let i = 1; i <= last; i++) {
        accr[i] = accr[i - 1] + (y[i - 1] + y[i]) / 2;
    }
    
    // x2와 x1에서의 구간합의 차이(도형의 넓이) 넣기
    for (const range of ranges) {
        // ranges 이중배열 분해해서 요소 range 배열 하나씩 꺼내기
        // x1 시작점 x2 끝점
        const [x1, x2] = [range[0], last + range[1]];
        
        if (x1 > x2) {
            result.push(-1); // 조건
        } else {
            result.push(accr[x2] - accr[x1]);
        }
    }
    return result;
}

// 정적분 개념!
// 조건 "단, 주어진 구간의 시작점이 끝점보다 커서 유효하지 않은 구간이 주어질 수 있으며 이때의 정적분 결과는 -1로 정의합니다"