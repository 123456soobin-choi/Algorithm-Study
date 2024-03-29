function solution(n) {
    var answer = 0;
    var dp = Array(n).fill(0)
    dp[0] = 1
    dp[1] = 2
    for(var i=2; i<n; i++){
        var a = dp[i-1] + dp[i-2]
        dp[i] = a %  1000000007
    }
    return dp[n-1];
}

// d[3] = d[2] + d[1]