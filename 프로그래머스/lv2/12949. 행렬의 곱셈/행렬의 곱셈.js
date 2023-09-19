function solution(a, b) {
    let answer = [];
    
    for(let i=0; i<a.length; i++) {
        let arr = a[i];
        answer.push([]);
        for(let j=0; j<b[0].length; j++) {
            let sum = 0;
            for(let z=0; z<b.length; z++) {
                sum += arr[z]*b[z][j];
            }
            answer[i].push(sum);
        }
    }
    
    return answer;
}

// i = 고정시킬 a의 행 / j = 고정시킬 b의 열 / z = a의 행에서 각 인덱스 접근, b의 열 고정해두고 행이 변하여 접근하도록 함
// 행렬 곱셈을 위해선 첫째 행렬의 열 갯수와 둘째 행렬의 행 갯수가 동일해야한다