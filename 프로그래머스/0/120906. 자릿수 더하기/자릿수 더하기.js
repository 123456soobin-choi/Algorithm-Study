function solution(n) {
    let answer = 0;
    const arr = String(n).split("");
    answer = arr.reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
}