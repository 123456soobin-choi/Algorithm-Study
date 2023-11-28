function solution(plans) {    
    const queue = plans.map((plan) => {
        const [name, time, spend] = plan;
        const [hour, minute] = time.split(':');
        const convertedTime = Number(hour) * 60 + Number(minute);

        return [name, convertedTime, Number(spend)];
    })
    .sort((a, b) => a[1] - b[1]); // queue의 2번째 요소 time 으로 오름차순 정렬
    
    const result = [];
    const first = queue.shift(); // queue 배열의 첫번째 배열
    let curTime = first[1]; // 첫번째 과제의 시작시간
    
    const stack = [first];
    
    while (queue.length) {
        const target = queue.shift();
        const [_name, time, _spend] = target;        
        let timeDiff = time - curTime; // 과제 시간 차이
        curTime = time;
        
        while (stack.length && timeDiff > 0) {
            const latestPlan = stack.pop();
            const [lName, _lTime, lSpend] = latestPlan;
            
            if (lSpend <= timeDiff) {
                result.push(lName);
                timeDiff -= lSpend;
            } else {
                latestPlan[2] = lSpend - timeDiff;
                timeDiff = 0;
                stack.push(latestPlan);
            }
        }
        
        stack.push(target);
    }

    while (stack.length) {
        result.push(stack.pop()[0]); // 이름만 최종 결과 배열에 넣기
    }
    
    return result;
}

// 1시간 -> 60분 변환해야 함 hh:mm - 시간*60+분 -> 0시 0분부터 경과한 시간 분단위로 구하기
// 큐 스택 개념!!!