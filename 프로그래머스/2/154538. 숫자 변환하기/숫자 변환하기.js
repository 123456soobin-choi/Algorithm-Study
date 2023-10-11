function solution(x, y, n) {
    const dp = new Array(y+1).fill(Infinity);
    dp[x] = 0;
    for(let i=x; i<=y; i++){
        dp[i+n] = Math.min(dp[i+n],dp[i]+1);
        dp[i*2] = Math.min(dp[i*2],dp[i]+1);
        dp[i*3] = Math.min(dp[i*3],dp[i]+1);
    }
    return dp[y]!==Infinity? dp[y] : -1;
}

// DP 큰 문제를 작은 문제로 쪼개서 그 답을 저장해두고 재활용