function solution(d, budget) {
    let result = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i = 0; result <= budget; i++) {
        if (result + d[i] <= budget) {
            result += d[i];
            continue;
        }

        return i;
    }
}