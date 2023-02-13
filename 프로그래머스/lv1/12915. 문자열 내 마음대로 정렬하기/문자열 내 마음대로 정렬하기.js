function solution(strings, n) {
    let answer = [];
    
    for (let i = 0; i < strings.length; i++) {
          let answer = strings.sort().sort((a, b) => {
            if (a[n] > b[n]) {
              return 1;
            } else if (a[n] < b[n]) {
              return -1;
            } else {
              return 0;
            }
        });
        return answer;
    }
}