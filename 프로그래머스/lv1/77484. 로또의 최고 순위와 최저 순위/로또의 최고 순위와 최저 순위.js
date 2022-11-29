function solution(lottos, win_nums) {
    let answer = [];

    let intersection = lottos.filter((x) => win_nums.includes(x));
    let correct = intersection.length;
    
    let zero = lottos.filter((x) => x === 0).length;
    
    let min = 7 - correct >= 6 ? 6: 7 - correct;
    let max = correct + zero <= 1 ? 6 : 7 - (correct + zero)
    
    answer =  [max, min]

    return answer;
}