function solution(keymap, targets) {
    let answer = [];
    
    for(let i=0; i<targets.length; i++){
        let target = targets[i];
        let count = 0;
        
        for(let j=0; j<target.length; j++){
            let str = target[j];
            // 
            const min = Math.min(...keymap.map(x => {
                const idx = x.indexOf(str);
                return idx === -1 ? Infinity : idx + 1;
            }));
            if(min === Infinity) {
                count = -1;
                break;
            }
            count += min;
        }
        answer[i] = count;
    }
    
    return answer;
}