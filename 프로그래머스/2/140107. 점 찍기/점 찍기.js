function solution(k, d) {
    let answer = 0;
    // 1) x좌표 값 만큼 반복 실행
    for(let x=0; x<=d; x+=k){
        // 2) 원점과의 거리 y의 좌표를 구한다.
        let y = parseInt(Math.sqrt(d**2 - x**2));
        
        // 3) y 좌표 내부 찍을 수 있는 점의 개수
        answer += parseInt(y/k)+1;
    }
    return answer;
}

// 원의 방정식 r^2 = (x-a)^2 - (y-b)^2를 이용하여 x좌표에 대한 y의 값의 최대 값을 구한다.
// 최대 값이 y인 좌표 내부에 찍을 수 있는 점의 개수는 소수 점을 제거한 y / k + 1 값과 같다.
// (k의 배수기 때문에 k로 나누고, 0을 포함하기 위해 +1) 
// 점의 좌표는 정수 값으로만 이동한다고 했기 때문에 parseInt로 변환한다.