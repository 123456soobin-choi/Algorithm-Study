function solution(s1, s2) {
    let answer = 0;
    answer = s1.filter((x) => s2.includes(x)).length;
    return answer;
}