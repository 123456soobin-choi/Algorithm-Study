function solution(arr) {
    const answer = [0, 0];
    
    function check(x, y, n) {
        if (n === 1) return answer[arr[x][y]]++;
        
        let flag = true;
        for (let i=x; i<x+n; i++) {
            for (let j=y; j<y+n; j++) {
                if (arr[x][y] !== arr[i][j]) {
                    flag = false;
                    break;   
                }
            }
        }
        
        if (flag) return answer[arr[x][y]]++;
        
        n /= 2;
        
        check(x, y, n);
        check(x+n, y, n);
        check(x, y+n, n);
        check(x+n, y+n, n);
    }
    
    check(0, 0, arr.length);
    
    return answer;
}

// x, y는 체크하고자 하는 정사각형의 시작 좌표, n은 체크하고자 하는 정사각형의 길이
// x부터 x+n 그리고 y부터 y+n까지 차례대로 순환하며 모든 원소가 0 또는 1로 같을 때 재귀 함수를 종료
// 이를 만족하지 못했을 경우 문제의 조건대로 n/2(정사각형의 반)과
// 자른 정사각형의 시작 좌표에 해당하는 x, y를 가지고 다시 재귀 함수를 호출
